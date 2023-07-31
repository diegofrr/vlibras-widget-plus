const _root = Array.from([document.body, ...document.body.children]);
// const vw = document.querySelector('div[vw]');

function hasLinkAncestor(element) {
    while (element) {
        if (_root.includes(element)) break;
        if (element.tagName === "A"
            || (element.onclick && !isSVG(element))) return element;
        element = element.parentNode;
    }
    return null;
}

function isSVG(element) {
    return ['SVG', 'PATH'].includes(element.tagName?.toUpperCase());
}


function hasTextContent(element) {
    return (element.nodeType === Node.TEXT_NODE &&
        element.textContent.trim()
    );
}

function isValid(element) {
    window.getSelection().removeAllRanges();
    if (element.tagName === 'IMG' && !element.click) return false;

    // if (vw.contains(element)
    //     || element.classList.contains('link_tooltip')) return false;

    return element.classList.contains('link_tooltip') ? false
        : hasTextContent(element)
        || hasLinkAncestor(element)
        || Array.from(element.childNodes).some(e => hasTextContent(e))
        || ['SELECT'].includes(element.tagName)
}

function highlightElement(event) {
    const element = event.target;
    if (isValid(element)) {
        element.classList.add('vlibras-text--hover');

        range = new Range();
        range.setStart(element, 0);
        range.setEnd(element, element.childNodes.length);

        window.getSelection().addRange(range);
    }
}

function printContent(event) {
    const element = event.target;
    if (!isValid(element)) return;
    else if (!['INPUT', 'TEXTAREA'].includes(element.tagName)) {
        event.preventDefault();
        event.stopPropagation();
    }

    console.log(
        `${element.tagName === 'SELECT' ? element.querySelector('option').innerText
            : element.innerText}`.replace(/\s+/g, ' ').trim());

    const linkElement = element.tagName === "A" ? element : hasLinkAncestor(element);

    if (linkElement) showTooltip(event, linkElement)
    else if (element.tagName === 'BUTTON') showTooltip(event, element)
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

    const yView = event.clientY > window.innerHeight - 80;
    const xView = event.clientX > window.innerWidth - 120;

    if (yView) tooltip.style.bottom = '20px';
    else tooltip.style.top = yView + event.clientY + 32 + 'px';

    if (xView) tooltip.style.right = '20px';
    else tooltip.style.left = event.clientX - 20 + 'px';

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
        position: fixed;
        z-index: 2147483647 !important;
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
        box-shadow: 0 0 10px #00000036;
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
        opacity: 1 !important;
        cursor: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAABQCAYAAABf9vbdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjASURBVHgB7VlbbBRVGP7PzJSCFK2KQAk2Q0JreEC5viCQEkADxMjFQOILt6eCiDxrQnkg8EaQ2xNQX0gkGkgMJVwartEHrloSoTVhI0gL1tDSAm13Z8b/O7NnO7s7253pbmti5iPDbHdmzn7//T//CCoy9l58Vj4iXmJqwim3NWHiO812Yjj3GIk72xe+2UFFhKACIQlbpet4oRpebTo5ZOZ5JMbHHf7pU716z2UWKEYFYNAC7D/fVaMJfYck7kGpIahsJNEIg2jMSHf5rh6H+hJE3T1EvQknbR3+65IgUb958ajvaBAILUAmcRB+q4zovQk6TXxTS5HOhX+6HWrvtin2Nx/ttvdSjOnUhRUksADsKia7yjFFHESrKzSaNkmXQkDLt/8kPmzq6iVq63QPWKOs1D2qxguqGidoRqX7PJ553GHTzQeW/OwScup79L6dQV0rkACu1rWTbOpykJ01WZfE8aNXWxxqaAJ5h8JgRqWgZdNwaPLv+22WV5AYO9f2zYtHn8q3Tl4BDje+2uE4Th0+V5QLWji1RGrvxA2bjl51tV0IKt4g2jhPk4KA/M8tiZRrCSHqaheN2kmDFcBLfrZpSM23PHFoV4PFZyoqIMj+z3U+C7oRS0hrSIJ5hBBByNdMNWSQFkvrA+HLRRqtnaPRb48S9EtLfiF8BTh09sUK0sVJfJ5bZUh/P3rNpiPXbBoOwKU28YG4uPR7wiXqWAtrl4y5lHmvlvkFsg2T34vPcJvhJg+o34PV4baAI/STklsGsgQoiZfU8ck0x2ryYbjNcJJXgBDfX7elEpE8GKj4xzLvS3Ohg+e61wtNO4Ys88mMEupmX//ssJW6PoED7ZvlOk0ZR3kLlhfILmc41e5rDKcI1I4DHNj43R+vx2UVz3Qlw/sAk9+BMzQPghuOJdIWPJDMEsj7sgkIQWTNHNfYYYSAAnc12FS/QaeZkzUZ1DZ3AXzpUpYA0D6fTBCH7zU02dTa2b8YCg/I77tgS7cKi92r3FwPd+wOkcWQtuFKa+cYdPehDWvWHObCqqzQHwOatg4nFTRHM/weZpQLPg1XcVNEnrptRRjXUwAXNIJoXYCkFVza+A/RrXqcieValvaDwO1xRErQYgIWu9Ji0/uTDNl3gSvaeFyTAvAGpAZnZB5oyPXxcNi9WpMxgiAfCoATWnR0vkBponQ9zlIADt5PcTbf0aSpBtOYIT7gr7AEgrbYACdwQ3wCTtJjVAxMx39vl4nQ5AF0la2dbpqEn6sO0w9wMQjrPYLiFrfq2HMAQtAHOBvSlywyYZ6xZRo1Pw2XYUAIhBE3EB6CLKhGt+p/P9zMDyc40+RLsdhvYG3EAdcEE9w1I2FI7b8+0pXsjyfhLDCzsl+D6GFgZrgUXCkMUCfQ/wyErl6XG6wMjI6PNlNPjDDUTRQKS1n70DqKOtxBZS9oKizWzB5YgLbk2oqrJXrLDQ2jD6dfKmgwKOA+sADcZ9fpfvOf/cqQZML2UIpDLrR1uhZApmxl0hjbGJk3hamS1ePdlHvierrb7Wu02I00uUnJrCdXmp2030DGCmotv+xm2Dx00kW/5if4/GgugMyVZivrewjV0GT5PvNto510ORcQckG1QUFQ5hnTABiYGZojOlDa+hL9C94eYJExBeb4bbzjgoVAYdM8PVTNUPf2eXpMo68kHiu1Sul5j528CVJmZ6KrMP0iN9N09dqpgAoCN9W62oOfw8JfL9dS3wUFxjKA8haMKg3MKg81voyxVCZMg6D0y+Hw2yPXLNq2WM+Zy4Ng12krVTvCoor3IRiKJad7MXB3nc/BrJLMx89sDr7c5E7cwBwoQdMrszU3s1LkJIX2G4VqfpWW0v5gMJMTw1/P3NhyHPoVZymA7diXeXC1ormN96EVuixEuVoKEGjN0ewtm+b7NRPHPsIVZM1sMSjtgxPczzMzkkMHuVLciNfjrMwT1jcHwi1WhKoRCEJYEW7kzURBAE5w8ZQAcbpMSgD4EqbEiG7sehawqQvtKKHtL45btPW4JbtU7MjqN+q8tls7sNeGIEjF+aBiBi4OgGvt0lGxlACA7VhycIRZDEyVry/JBxBDpsI6P9Qy8WpNthq7V+u0Z5XrphCkIsAGSHG5GUsOungcr66lTyUuvLyI3c7cKTwPelen9UetwFvIpWxi72YG5s63ffS758M96YMEOZGoNeh+Kw+57slrsc2LX5usrqepWVkBs0ksjmwR1JWuZrhCkL1v5j3oqTKBlA0uSvt4h+C9nibAVt7pq1jASA+FI6groU7su2DRYIGgzhwkoGrD7TBOgRB+b3KymhAtLjbYJfZtfvFQjgnxmjl6sojl7yxVnZgyTuTtLL1ArGSmbVR87BHgDQ/apWJiFKesAa+vnfFCQxf6RXxWk+n/Yrjb9MiS7wskLGfl5o+zX3j4+od0JceR0sKVmh5aclGYdCiBeMNvqMm0Ig8ufuSBASPt4PkXdVzx5BBJveCAryK/t4WcG+XDlPE8d12my7jzvuAA+S1LRtflei5vqvAKgbkR3he4syPXpQoVBFrflPR3BCosjhd/QcgHEgDYf+H5Cp0HGJScnc4yddkzARAEO7IwI0eQns+7sOVcXdWkG/4OraOV4X8d3J+t3OrzQmNQAgCHz7wyHd2uI03IGaoSRL0bDhrkKExqyg2yaF3g72qXhTSOTKhahaIJoJB8hwCXMtV3qnIHEQKjcvj5T7fj8qW3enMP4iikQbRekAAKchzPE201FFbpFp2nX0UFkGHg6/BzaL0Q4goF983eIB9ICJXbVYaBn3PvsnDLR2V3qAAUnNiRJbw1Ay0veqgZnl0bZkRDQR4o2s5FWQJTM7xfG2losl6gpUDQqqpaTPJA8bZe5C8EkmJ7l03n7hafPFDU3kC5E7pZZJmehC1nOJfvWUNCHiiqBRSUJVS/zzOnISEPDIkAgBJiqDQ/LIAQXC+mU4QIESJEiBAhQoQIESJEiBAhQoQIEf5n+Bc5J4A9gCvsTAAAAABJRU5ErkJggg==')
        24 48, pointer !important;
    }
    .vlibras-text--hover img::selection {
        background: transparent !important;
    }
    `

document.body.appendChild(style);
