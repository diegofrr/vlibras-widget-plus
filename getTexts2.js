// Script para captura dos textos da página no passar do mouse
// by: diegofrr

// const vw = document.querySelector('div[vw]');

function hasLinkAncestor(element) {
    let parent = element.parentNode;

    while (parent) {
        if (parent.tagName === "A") {
            parent.addEventListener('click', clickHandler);
            parent.addEventListener('mouseout', removeClickHandler);

            function clickHandler(e) { e.preventDefault() }

            function removeClickHandler() {
                parent.removeEventListener('click', clickHandler);
                parent.removeEventListener('mouseout', removeClickHandler);
            }
            return parent;
        }
        parent = parent.parentNode;
    }
    return null;
}

function hasTextContent(element) {
    return (element.nodeType === Node.TEXT_NODE &&
        element.textContent.trim()
    );
}

function isValid(element) {
    // if (vw.contains(element)
    //     || element.classList.contains('link_tooltip')) return false;

    return element.classList.contains('link_tooltip') ? false
        : hasTextContent(element)
        || hasLinkAncestor(element)
        || Array.from(element.childNodes).some(e => hasTextContent(e))
        || ['A', 'BUTTON', 'SELECT', 'IMG'].includes(element.tagName)
}

function highlightElement(event) {
    const element = event.target;
    if (isValid(element)) element.classList.add('vlibras-text--hover');
    else return;
}

function printContent(event) {
    const element = event.target;
    if (!isValid(element)) return;
    else if (element.tagName !== 'INPUT') event.preventDefault();

    console.log(
        `${element.tagName === 'IMG' ? element.alt
            : element.tagName === 'SELECT' ? element.querySelector('option').textContent
                : element.textContent}`.replace(/\s+/g, ' ').trim()
    )

    const linkElement = element.tagName === "A" ? element : hasLinkAncestor(element);
    let link = linkElement?.getAttribute('href');

    if (link && link !== 'javascript:void(0);') {
        removeTooltips();
        showTooltip(event, linkElement);
    } else if (element.tagName === 'BUTTON') {
        // showTooltip(event, element)
    }

}

function removeHighlight(event) {
    event.target.classList.remove('vlibras-text--hover');
}

function showTooltip(event, linkElement) {
    const tooltip = document.createElement("div");
    tooltip.innerText = "Abrir link";
    tooltip.classList.add("link_tooltip");

    tooltip.style.top = event.pageY + 32 + 'px';
    tooltip.style.left = event.pageX - 20 + 'px';

    document.body.appendChild(tooltip);
    tooltip.onclick = () => {
        document.removeEventListener("click", printContent);
        linkElement.click();
        document.addEventListener("click", printContent);
    };

    document.addEventListener("click", removeTooltips);
}

function removeTooltips() {
    document.querySelector('.link_tooltip')?.remove();
    document.removeEventListener("click", removeTooltips);
}

function activate() {
    document.addEventListener("mouseover", highlightElement);
    document.addEventListener("mouseout", removeHighlight);
    document.addEventListener("scroll", removeTooltips);
    document.addEventListener("click", printContent);
}

function deactivate() {
    removeTooltips();
    document.removeEventListener("mouseover", highlightElement);
    document.removeEventListener("mouseout", removeHighlight);
    document.removeEventListener("scroll", removeTooltips);
    document.removeEventListener("click", printContent);
}

activate()

const style = document.createElement('style');
style.innerHTML = `
.link_tooltip {
    position: absolute;
    z-index: 9999999 !important;
    background-color: white;
    padding: 10px 15px !important;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid #ddd !important;
    font-size: 16px !important;
    color: #2470E0 !important;
    white-space: nowrap;
    animation: showTooltip .3s ease;
    text-decoration: none;
    line-height: 1 !important;
}

@keyframes showTooltip {
    0% {
        margin-top: 10px;
        opacity: 0;
    }
    100% {
        margin-top: 0;
        opacity: 1;
    }
}

.link_tooltip:hover {
    text-decoration: underline;
    box-shadow: 0 0 10px #DDD;
}

.link_tooltip::before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    background: white;
    left: 10px;
    top: -5px;
    transform: rotate(45deg);
    z-index: -1;
    border: 1px solid #DDD;
}

.link_tooltip::after {
    content: "";
    width: 100%;
    background-color: white;
    height: 100%;
    z-index: -1;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 6px;
}

.vlibras-text--hover {
    cursor: pointer !important;
    opacity: 1 !important;
    text-decoration: line-through 120% rgba(0,63,134,0.2) !important;
    cursor: url(https://imgur.com/31ROcSm.png), pointer !important;
}
`

document.body.appendChild(style);