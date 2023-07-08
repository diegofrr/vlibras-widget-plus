// Script para captura dos textos da página no passar do mouse
// by: diegofrr

// const vw = document.querySelector('div[vw]');

function hasClickEvent(element) {
    if (element.onclick) element;

    if (typeof element.addEventListener === 'function') {
        let eventListeners = getEventListeners(element);
        if (eventListeners && eventListeners.click &&
            eventListeners.click.length > 0) element;
    }

    if (typeof element.attachEvent === 'function') {
        let attachedEvents = element.outerHTML.split(' ');
        for (var i = 0; i < attachedEvents.length; i++) {
            if (attachedEvents[i].startsWith('onclick=')) element;
        }
    }
    return null;
}

function hasLinkAncestor(element) {
    let parent = element.parentNode;

    while (parent) {
        if (parent.tagName === "A") return parent;
        else parent = parent.parentNode;
    }
    return hasClickEvent(element);
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
        || ['A', 'SELECT', 'IMG'].includes(element.tagName)
}

function highlightElement(event) {
    const element = event.target;
    if (isValid(element)) element.classList.add('vlibras-text--hover');
    else return;
}

function printContent(event) {
    const element = event.target;
    if (!isValid(element)) return;
    else if (element.tagName !== 'INPUT') {
        event.preventDefault();
        event.stopPropagation();
    }

    console.log(
        `${element.tagName === 'IMG' ? element.alt
            : element.tagName === 'SELECT' ? element.querySelector('option').textContent
                : element.textContent}`.replace(/\s+/g, ' ').trim());

    const linkElement = element.tagName === "A" ? element : hasLinkAncestor(element);

    if (linkElement) showTooltip(event, linkElement)
    else if (element.tagName === 'BUTTON' ||
        element.onclick) showTooltip(event, element)
}

function clickHandler(element) {
    document.removeEventListener("click", printContent, true);
    element.click();
    document.addEventListener("click", printContent, true);
}

function removeHighlight(event) {
    event.target.classList.remove('vlibras-text--hover');
}

function showTooltip(event, linkElement) {
    removeTooltips();

    const tooltip = document.createElement("div");
    tooltip.innerText = "Acessar link";
    tooltip.classList.add("link_tooltip");

    tooltip.style.top = event.pageY + 42 + 'px';
    tooltip.style.left = event.pageX - 20 + 'px';

    document.body.appendChild(tooltip);
    tooltip.onclick = () => clickHandler(linkElement);

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
    document.addEventListener("click", printContent, true);
}

function deactivate() {
    removeTooltips();
    document.removeEventListener("mouseover", highlightElement);
    document.removeEventListener("mouseout", removeHighlight);
    document.removeEventListener("scroll", removeTooltips);
    document.removeEventListener("click", printContent, true);
}

activate()

const style = document.createElement('style');
style.innerHTML = `
.link_tooltip {
    position: absolute;
    z-index: 9999999 !important;
    background-color: white;
    padding: 10px 15px !important;
    border-radius: 8px;
    cursor: pointer;
    border: 1px solid #ddd !important;
    font-size: 16px !important;
    color: #0c326f !important;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1 !important;
    animation: showTooltip .3s ease;
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
//  text-decoration: underline;
    box-shadow: 0 0 10px #00000036;
    color: #2470E0 !important;
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
    border-radius: 8px;
}

.vlibras-text--hover {
    cursor: pointer !important;
    opacity: 1 !important;
    text-decoration: line-through 120% rgba(0,63,134,0.2) !important;
    cursor: url(https://imgur.com/31ROcSm.png), pointer !important;
}
`

document.body.appendChild(style);
