var div = document.createElement('div');
div.textContent = 'Shadow Div text Content';
div.className = 'x';

var host = document.querySelector('#shadowHost');

var shadowRoot = host.createShadowRoot();
shadowRoot.appendChild(div);
