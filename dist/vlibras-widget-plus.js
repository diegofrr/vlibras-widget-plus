const dist = "https://diegofrr.github.io/vlibras-widget-plus/dist";

const template = `
  <div id="vwp-access-wrapper">
    <img id="vwp-access-popup" src="${dist}/assets/images/vwp-popup.webp" />
    <button type="button" aria-label="Recursos assistivos com VLibras Widget+" id="vwp-access-button">
      <img src="${dist}/assets/images/vwp-access.svg" />
    </button>
  </div>
  <style>
    #vwp-access-wrapper {
	height: 40px;
	width: 40px;
}

#vwp-access-button,
#vwp-access-popup {
	border-radius: 8px;
	overflow: hidden;
	height: 40px;
}

#vwp-access-wrapper {
	display: flex;
	align-items: center;
	position: fixed;
	z-index: 2147483644;
	right: 10px;
	top: calc(50vh - 20px);
	transition: all .5s ease;
	width: 40px;

	&:hover { 
		width: 208px;
	}
}

#vwp-access-button {
	right: 0;
	z-index: 1;
	position: absolute;
	width: 40px;
	height: 40px;
	border: none;
	padding: 0;
	cursor: pointer;

	&:hover { 
		filter: brightness(1.1);
	}
}
</style>`;

const wrapper = document.createElement("div");
const shadow = wrapper.attachShadow({ mode: "open" });
wrapper.id = "vwp-app-wrapper";

shadow.innerHTML = template;
document.body.appendChild(wrapper);

let widget;
const initBtn = shadow.querySelector("#vwp-access-button");

const open = () => {
  if (widget) return (widget.dataset.active = true);

  const script = document.createElement("script");
  script.src = `${dist}/vlibras-widget-plus-app.umd.cjs`;
  script.async = true;
  script.onload = () => {
    widget = document.getElementById("vwp-app-root");
    widget.dataset.active = true;
  };
  document.body.appendChild(script);
};

initBtn.onclick = open;

window.VLibrasWidgetPlus = {};
window.VLibrasWidgetPlus = { path: dist, initBtn, open };
