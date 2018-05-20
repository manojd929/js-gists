var host = document.querySelector('#shadowHost');

var shadowHost = host.createShadowRoot();
shadowHost.appendChild(document.querySelector('#tmp1').content);