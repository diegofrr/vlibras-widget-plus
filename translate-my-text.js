const button = document.createElement('button');
button.classList.add('vp-write-text');

const cssRules = {
    border: 'none',
    backgroundColor: '#838890',
    width: '32px',
    height: '32px',
    borderRadius: '32px',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: '0',
    margin: '0',
}

Object.assign(button.style, cssRules);

button.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="#FFF" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>';

button.querySelector('svg').style.color = '#FFF';
button.onmouseenter = () => button.style.opacity = .7;
button.onmouseleave = () => button.style.opacity = 1;

document.querySelector('div[vp-change-avatar]').appendChild(button);

document.querySelector('.vp-write-text').onclick = () => {
    const element = document.querySelector('div[vp-suggestion-screen]');
    const headerTitle = document.querySelector('.vp-suggestion-screen-header span');
    const headerBtn = document.querySelector('.vp-suggestion-screen-header button')
    const title = document.querySelector('.vp-suggestion-screen-content .vp-title');
    const buttonsContainer = document.querySelector('.vp-suggestion-buttons-container');
    const viewBtn = document.querySelector('.vp-visualize-signal-button');
    const sendBtn = document.querySelector('.vp-send-button');
    const translateBtn = document.createElement('button');
    const textArea = document.querySelector('.vp-text');
    const textAreaOldHeight = textArea.offsetHeight;
    const mediaQuery = window.matchMedia("(max-width: 450px)");
    let writing = true;

    textArea.value = '';
    textArea.style.minHeight = `${mediaQuery.matches ? 130 : 180}px`;

    element.classList.add('vp-enabled');
    element.classList.add('vp-expanded');

    viewBtn.style.display = 'none';
    sendBtn.style.display = 'none';

    title.textContent = 'Digite um texto';
    headerTitle.textContent = 'Tradutor';

    translateBtn.textContent = 'Traduzir';
    translateBtn.classList.add('vp-visualize-signal-button');

    buttonsContainer.appendChild(translateBtn);

    translateBtn.onclick = (e) => {
        window.plugin.player.on('gloss:start', () => {
            if (writing) resetDetails(translateBtn);
            writing = false;
        })
        window.plugin.player.translate(textArea.value);
    }

    headerBtn.onclick = (e) => {
        resetDetails(headerBtn);
    }

    textArea.oninput = () => {
        if (textArea.value.trim().length >= 3) viewBtn.removeAttribute('disabled');
        else viewBtn.setAttribute('disabled', true);
    }

    function resetDetails(btn) {
        headerTitle.textContent = 'Feedback';
        title.textContent = 'Informe a glosa correta';
        textArea.style.height = textAreaOldHeight;
        textArea.style.minHeight = 'auto';
        viewBtn.style.display = 'flex';
        sendBtn.style.display = 'flex';
        translateBtn.remove();
        btn.onclick = null;
    }

}