//import headerTxt from './headerTxt.js';
import headerTxt from "!!../loaders/loader3.js!./headerTxt.js";
import box from './img/box.png';
import styles from './styles.scss';

window.onload = function() {
  // 1. create elements
  const body = document.querySelector('body');
  const container = document.createElement('div');
  const header = document.createElement('h3');
  const img = document.createElement('img');

  // 2. assign class to elements
  container.className = 'container';
  header.className = 'header';
  img.className = 'img';

  // 3. put elements into body
  header.innerText = headerTxt;
  img.src = box;
  container.appendChild(header);
  container.appendChild(img);
  body.appendChild(container);
};
