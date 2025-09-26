const DEFAULT_LANGUAGE = 'en';
const LANGUAGES = ['en', 'es'];

function changeLanguage(new_language) {
    const base_path = getBasePath();
    const [true_base_path, relative_path] = splitBase(base_path);

    // We divide the path into segments and get the first from it, so we can get the current language
    const path_segments = relative_path.split('/').filter(Boolean);//Preguntar a Alex
    const fist_segment = path_segments[0] || '';
    const current_language = LANGUAGES.includes(fist_segment) ? fist_segment : DEFAULT_LANGUAGE;

    // We stop the redirection if the language is the same as the current
    if (new_language === current_language || (new_language === '' && current_language === DEFAULT_LANGUAGE)) {
        return;
    }

    // Build new relative path segments without the locale segment (if present)
    const path_segments_no_language = LANGUAGES.includes(fist_segment) ? path_segments.slice(1) : path_segments;

    // We create the new relative path and add the new language if it's not the default one
    let new_relative_path; 
    if(new_language && new_language !== DEFAULT_LANGUAGE) {
        new_relative_path = [new_language, ...path_segments_no_language].join('/')
    } else {
        new_relative_path = path_segments_no_language.join('/');
    }

    // Depending on if the original path ended in an slash or not, we keep it so later we can add it to the new path (thought for strict urls)
    const keep_trailing_slash = relative_path.endsWith('/') || path_segments_no_language.length === 0;

    // We build the new URL and redirect to it
    const new_path = true_base_path + '/' + new_relative_path + (keep_trailing_slash ? '/' : '');
    const new_url = new_path.replace(/\/{2,}/g, '/') + window.location.search + window.location.hash; //We avoid double / with the regex and also mantain querys and hashes

    window.location.href = new_url;
}


// We look for any <link> that points into /assets/ and grab its prefix so that will be the base path
function getBasePath() {
    const link_element = document.querySelector('link[href*="/assets/"]');
    if (!link_element) return '';
    try {
        // We get the prefix up to (but not including) /assets/ and remove the last / if present 
        const url = new URL(link_element.href, window.location.origin);
        const base_path = url.pathname.split('/assets/')[0];
        
        return base_path.endsWith('/') ? base_path.slice(0, -1) : base_path;
    } catch {
        return '';
    }
}

function splitBase(base_path) {
    if (base_path) {
        if (location.pathname.startsWith(base_path + '/')) 
            return [base_path, location.pathname.slice(base_path.length)];
        if (location.pathname === base_path) 
            return [base_path, '/'];
    }
    return ['', location.pathname];
}
