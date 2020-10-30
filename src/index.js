import headerTxt from './headerTxt.js';
import box from './img/box.png';

window.onload = function() {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const header = document.createElement('h3');
  const img = document.createElement('img');

  header.innerText = headerTxt;
  img.src = box;
  container.appendChild(header);
  container.appendChild(img);
  body.appendChild(container);
};
