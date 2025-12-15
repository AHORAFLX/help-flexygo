let navigation_dialog;
addEventListener("DOMContentLoaded", (event) => { 
    navigation_dialog = document.getElementById('navigation-dialog');
})

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


// We look for any <link> that points into /docs_assets/ and grab its prefix so that will be the base path
function getBasePath() {
    const link_element = document.querySelector('link[href*="/docs_assets/"]');
    if (!link_element) return '';
    try {
        // We get the prefix up to (but not including) /docs_assets/ and remove the last / if present 
        const url = new URL(link_element.href, window.location.origin);
        const base_path = url.pathname.split('/docs_assets/')[0];
        
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

let current_navigation_json;
function navigateToFlexy(json, ctrlKey_pressed) {
    current_navigation_url = json;

    if (!this.isAFlexy()) {
        if (ctrlKey_pressed) {
            _nav(document.getElementById('navigation-dialog-flexy-url').value);
        } else {
            navigation_dialog.showModal();
        }

        return;
    }

    _nav();
}

function isAFlexy() {
    const current_url = new URL(window.location.href);
    if (current_url.pathname.startsWith('/docs/')) {
        return true;
    }

    return false;
}

function _nav(url) {
    if (!url) {
        url = '/Index#' +btoa(JSON.stringify(current_navigation_url));
    } else {
        if (!url.endsWith('/')) {
            url += '/';
        }

        url += 'Index#' +btoa(JSON.stringify(current_navigation_url));
    }
    
    window.open(url, '_blank');
    navigation_dialog.close();
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const copy_notification = document.createElement('div');
        copy_notification.className = 'small-message';
        copy_notification.innerText = translations[getLanguage()]['copied'];

        //We append it and animate its entrance
        document.body.appendChild(copy_notification);
        copy_notification.style.display = 'block';
        copy_notification.style.right = `-${copy_notification.clientWidth}px`;
        copy_notification.style.transition = "right .3s cubic-bezier(0, 0, 0.18, 0.92)"; //The transition is set after properly adjustin right position so it doesn't animate from 100% to its -width
        copy_notification.style.right = "0";

        setTimeout(() => {
            copy_notification.style.right = `-${copy_notification.clientWidth}px`;

            setTimeout(() => {
                document.body.removeChild(copy_notification);
            }, 300);
        }, 2000);
    }); 
}

function getLanguage() {
    if (window.location.href.includes('/es/'))
        return 'es';

    return 'en';
}

function toggleGraphsFilter(button) {
    const graphs = document.querySelectorAll('.filtered-graph, .unfiltered-graph');

    if (graphs[0].classList.contains('filtered-graph')) {
        graphs.forEach(graph => {
            graph.src = graph.src.replace('_filtered.png', '.png');

            graph.classList.remove('filtered-graph');
            graph.classList.add('unfiltered-graph');

            button.innerText = translations[getLanguage()]['filter_charts'];
        });

        return;
    }

    graphs.forEach(graph => {
        graph.src = graph.src.replace('.png', '_filtered.png');

        graph.classList.remove('unfiltered-graph');
        graph.classList.add('filtered-graph');

        button.innerText = translations[getLanguage()]['unfilter_charts'];
    });
}

function toggleCollapsable(element) {
    const collapsable_element = document.querySelector(element.dataset.target);
    collapsable_element.classList.toggle('collapsed');
    element.classList.toggle('icon-rotate-90');
}

const translations = {
    'en': {
        'copied': 'Copied to clipboard!',  
        'filter_charts': 'Filter charts',
        'unfilter_charts': 'Unfilter charts',
    },
    'es': {
        'copied': '¡Copiado en el portapapeles!',
        'filter_charts': 'Filtrar gráficos',
        'unfilter_charts': 'Quitar filtro de los gráficos',
    }
}