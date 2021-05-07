import mainPhoto from '../assets/main.png';

import html from '../assets/html.png';
import css from '../assets/css.svg';
import javascript from '../assets/javascript.png';
import typescript from '../assets/typescript.png';
import webpack from '../assets/webpack.png';
import react from '../assets/react.png';

const Main = () => {

  const main = document.createElement('main');
  main.classList.add('main');
  
  main.innerHTML = `
    <img src="${mainPhoto}" alt="main photo" class="main__img">
    <h1 class="main__name">Cesario Nivar</h1>
    <p class="main__title">Frontend Developer</p>
    <div class="tecnicals">
      <p class="tecnicals__html">html <img src="${html}" alt="html"></p>
      <p class="tecnicals__css"><img src="${css}" alt="css"> css</p>
      <p class="tecnicals__webpack">webpack <img src="${webpack}" alt="webpack"></p>
      <p class="tecnicals__javascript"><img src="${javascript}" alt="javascript"> javascript </p>
      <p class="tecnicals__typescript">typescript <img src="${typescript}" alt="typescript"></p>
      <p class="tecnicals__react"><img src="${react}" alt="react"> react</p>
    </div>
  `;

  return main;
}

export default Main;