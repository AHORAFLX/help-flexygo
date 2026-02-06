/**
 * Preserves theme/palette preference across version changes
 * Works with MkDocs Material and mike version selector
 * Note: Language preference is handled in utils.js
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'flexygo-docs-palette-preference';

    /**
     * Save the current palette preference
     */
    function savePalettePreference() {
        try {
            const palette = document.querySelector('[data-md-color-scheme]');
            if (palette) {
                const scheme = palette.getAttribute('data-md-color-scheme');
                localStorage.setItem(STORAGE_KEY, scheme);
            }
        } catch (e) {
            console.warn('Could not save palette preference:', e);
        }
    }

    /**
     * Restore the saved palette preference
     */
    function restorePalettePreference() {
        try {
            const savedScheme = localStorage.getItem(STORAGE_KEY);
            if (savedScheme) {
                const palette = document.querySelector('[data-md-color-scheme]');
                if (palette && palette.getAttribute('data-md-color-scheme') !== savedScheme) {
                    // Find and click the palette toggle to switch to saved preference
                    const toggle = document.querySelector(`[data-md-color-scheme="${savedScheme}"]`);
                    if (toggle) {
                        const button = toggle.closest('label')?.querySelector('input[type="radio"]');
                        if (button && !button.checked) {
                            button.click();
                        }
                    }
                }
            }
        } catch (e) {
            console.warn('Could not restore palette preference:', e);
        }
    }

    /**
     * Intercept version selector clicks to preserve preferences
     */
    function interceptVersionChanges() {
        // Observer for version selector (mike adds it dynamically)
        const observer = new MutationObserver(() => {
            const versionSelector = document.querySelector('.md-version');
            if (versionSelector && !versionSelector.dataset.preferencesHandled) {
                versionSelector.dataset.preferencesHandled = 'true';
                
                // Add click handler to all version links
                const versionLinks = versionSelector.querySelectorAll('a');
                versionLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        savePalettePreference();
                    });
                });
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /**
     * Watch for palette changes and save them
     */
    function watchPaletteChanges() {
        const observer = new MutationObserver(() => {
            savePalettePreference();
        });

        const body = document.body;
        if (body) {
            observer.observe(body, {
                attributes: true,
                attributeFilter: ['data-md-color-scheme']
            });
        }
    }

    /**
     * Initialize preference persistence
     */
    function init() {
        // Restore palette preference
        restorePalettePreference();
        
        // Setup watchers and interceptors
        interceptVersionChanges();
        watchPaletteChanges();
        
        // Save preferences before page unload
        window.addEventListener('beforeunload', savePalettePreference);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
