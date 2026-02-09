/**
 * Custom Version Switcher Component
 * Maintains current language when switching between documentation versions
 * Works with mike version provider and versions.json
 */

class VersionSwitcher {
    constructor() {
        this.languages = ['en', 'es'];
        this.defaultLanguage = 'es';
        this.versions = [];
        this.currentVersion = null;
        this.currentLanguage = null;
        this.init();
    }

    init() {
        // Detect current language
        this.currentLanguage = this.detectCurrentLanguage();
        
        // Wait for mike's version selector to be added to DOM
        this.interceptMikeVersionSelector();
        
        // Also try to load and replace immediately if already present
        document.addEventListener('DOMContentLoaded', () => {
            this.loadVersionsAndReplace();
        });
    }

    /**
     * Detects the current language from the URL
     */
    detectCurrentLanguage() {
        const base_path = this.getBasePath();
        const [, relative_path] = this.splitBase(base_path);
        const path_segments = relative_path.split('/').filter(Boolean);
        const first_segment = path_segments[0] || '';
        
        // If first segment is a language code, use it
        if (this.languages.includes(first_segment)) {
            return first_segment;
        }
        
        // Otherwise, return default
        return this.defaultLanguage;
    }

    /**
     * Detects the current version from the URL
     */
    detectCurrentVersion() {
        const base_path = this.getBasePath();
        
        // Extract version from base path (e.g., /v1.0/, /latest/, etc.)
        const versionMatch = base_path.match(/\/([^/]+)\/?$/);
        if (versionMatch) {
            return versionMatch[1];
        }
        
        return null;
    }

    /**
     * Load versions from versions.json
     */
    async loadVersions() {
        try {
            // Calculate the correct path to versions.json
            // It's typically at the root of the site, same level as version folders
            const base_path = this.getBasePath();
            const site_root = base_path.split('/').slice(0, -1).join('/') || '';
            const versions_url = `${site_root}/versions.json`;
            
            const response = await fetch(versions_url);
            if (!response.ok) {
                console.warn('Could not load versions.json');
                return [];
            }
            
            const versions = await response.json();
            this.versions = versions;
            return versions;
        } catch (error) {
            console.warn('Error loading versions:', error);
            return [];
        }
    }

    /**
     * Build version URL with language maintained
     */
    buildVersionUrl(targetVersion) {
        const base_path = this.getBasePath();
        const [, relative_path] = this.splitBase(base_path);
        
        // Get current path without version and language
        const path_segments = relative_path.split('/').filter(Boolean);
        const first_segment = path_segments[0] || '';
        
        // Remove language segment if present
        const path_segments_no_language = this.languages.includes(first_segment) 
            ? path_segments.slice(1) 
            : path_segments;
        
        // Build new path with target version and current language
        const site_root = window.location.origin;
        const version_segment = targetVersion.version || targetVersion;
        
        let new_path_parts = [site_root, version_segment];
        
        // Add language segment if not default
        if (this.currentLanguage && this.currentLanguage !== this.defaultLanguage) {
            new_path_parts.push(this.currentLanguage);
        }
        
        // Add the rest of the path
        new_path_parts.push(...path_segments_no_language);
        
        // Build final URL
        const new_url = new_path_parts.join('/') + '/';
        return new_url.replace(/\/+/g, '/').replace(':/', '://');
    }

    /**
     * Intercept mike's version selector and modify links
     */
    interceptMikeVersionSelector() {
        const observer = new MutationObserver(() => {
            const versionSelector = document.querySelector('.md-version');
            if (versionSelector && !versionSelector.dataset.languageAware) {
                versionSelector.dataset.languageAware = 'true';
                this.enhanceVersionSelector(versionSelector);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Enhance version selector links to maintain language
     */
    async enhanceVersionSelector(versionSelector) {
        // Load versions if not already loaded
        if (this.versions.length === 0) {
            await this.loadVersions();
        }

        // Find all version links and modify them
        const versionLinks = versionSelector.querySelectorAll('a');
        
        versionLinks.forEach(link => {
            const originalHref = link.getAttribute('href');
            
            // Extract version from the original href
            const versionMatch = originalHref.match(/\/([^/]+)\//);
            if (versionMatch) {
                const targetVersion = versionMatch[1];
                
                // Prevent default click and handle it ourselves
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.switchToVersion(targetVersion);
                });
            }
        });

        console.log('Version selector enhanced to maintain language');
    }

    /**
     * Switch to a specific version while maintaining language
     */
    switchToVersion(targetVersion) {
        // Update current language detection
        this.currentLanguage = this.detectCurrentLanguage();
        
        // Build new URL
        const base_path = this.getBasePath();
        const [, relative_path] = this.splitBase(base_path);
        const path_segments = relative_path.split('/').filter(Boolean);
        const first_segment = path_segments[0] || '';
        
        // Remove language segment if present
        const path_segments_no_language = this.languages.includes(first_segment) 
            ? path_segments.slice(1) 
            : path_segments;
        
        // Build new path
        const site_root = window.location.origin;
        let new_path_parts = [site_root, targetVersion];
        
        // Add language segment if not default
        if (this.currentLanguage && this.currentLanguage !== this.defaultLanguage) {
            new_path_parts.push(this.currentLanguage);
        }
        
        // Add the rest of the path
        new_path_parts.push(...path_segments_no_language);
        
        // Build final URL
        let new_url = new_path_parts.join('/');
        
        // Ensure trailing slash if original had it
        if (relative_path.endsWith('/') || path_segments_no_language.length === 0) {
            new_url += '/';
        }
        
        // Clean up double slashes
        new_url = new_url.replace(/([^:])\/+/g, '$1/');
        
        // Add query string and hash if present
        new_url += window.location.search + window.location.hash;
        
        console.log('Switching to version:', targetVersion, 'with language:', this.currentLanguage);
        console.log('New URL:', new_url);
        
        // Navigate
        window.location.href = new_url;
    }

    /**
     * Load versions and replace mike's selector entirely
     */
    async loadVersionsAndReplace() {
        await this.loadVersions();
        
        if (this.versions.length === 0) {
            return;
        }

        this.currentVersion = this.detectCurrentVersion();
        
        // Try to enhance existing selector
        const versionSelector = document.querySelector('.md-version');
        if (versionSelector) {
            this.enhanceVersionSelector(versionSelector);
        }
    }

    /**
     * Get base path from CSS link
     */
    getBasePath() {
        const link_element = document.querySelector('link[href*="/main-flexygo-styles.css"]');
        if (!link_element) return '';
        try {
            const url = new URL(link_element.href, window.location.origin);
            const base_path = url.pathname.split('/stylesheets/')[0];
            return base_path.endsWith('/') ? base_path.slice(0, -1) : base_path;
        } catch {
            return '';
        }
    }

    /**
     * Split base path from pathname
     */
    splitBase(base_path) {
        if (base_path) {
            if (location.pathname.startsWith(base_path + '/')) 
                return [base_path, location.pathname.slice(base_path.length)];
            if (location.pathname === base_path) 
                return [base_path, '/'];
        }
        return ['', location.pathname];
    }
}

// Initialize the version switcher
const versionSwitcher = new VersionSwitcher();

// Export for use in other scripts
window.versionSwitcher = versionSwitcher;
