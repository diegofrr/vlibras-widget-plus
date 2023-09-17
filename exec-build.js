const BUILD_URL = 'https://raw.githubusercontent.com/diegofrr/vlibras-widget-plus/main/vlibras-plugin.js'

root = ['[vp', '[vw', '.vpw-', '.vp-', '.vw-']

document.querySelectorAll('style').forEach(style => {
    if (root.some(i => style.textContent.includes(i))) style.remove();
})

const consoleStyle = 'font-size: 32px; color: #ffc83d; font-weight: bold';

const vwCount = document.querySelectorAll('[vw]').length;
if (vwCount > 1) console.log(`%c${vwCount} Widgets 😢`, consoleStyle);

const isLocal = document.querySelector('[vw]').innerHTML.includes(location.host);
if (isLocal) console.log(`%cBuild local 😵`, consoleStyle);

fetch(BUILD_URL).then(r => r.text()).then(eval).then(loadPlugin);

function loadPlugin() {
    window.plugin = new window.VLibras.Plugin({
        rootPath: 'https://diegofrr.github.io/vlibras-widget-plus/app',
        wrapper: document.querySelector('[vw-plugin-wrapper]'),
        position: 'R',
        opacity: 1,
    });
}