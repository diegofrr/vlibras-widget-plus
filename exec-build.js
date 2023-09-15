root = ['[vp', '[vw', '.vpw-', '.vp-']

document.querySelectorAll('style').forEach(style => {
    if (root.some(i => style.textContent.includes(i))) style.remove()
})


