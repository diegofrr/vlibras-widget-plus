const BUILD_URL = 'https://raw.githubusercontent.com/diegofrr/vlibras-widget-plus/main/vlibras-plugin.js'

root = ['[vp', '[vw', '.vpw-', '.vp-', '.vw-']

document.querySelectorAll('style').forEach(style => {
    if (root.some(i => style.textContent.includes(i))) style.remove()
})

fetch(BUILD_URL).then(res => res.text()).then(js => eval(js))