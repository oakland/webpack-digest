import headerTxt from './headerTxt.js';

window.onload = function() {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const header = document.createElement('h3');

  header.innerText = headerTxt;
  container.appendChild(header);
  body.appendChild(container);
};
