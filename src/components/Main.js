
import mainPhoto from '../assets/main.png';

const Main = () => {

  const main = document.createElement('main');
  main.classList.add('main');
  
  main.innerHTML = `
    <img src="${mainPhoto}" alt="main photo" class="main__img">
    <h1 class="main__name">Cesario Nivar</h1>
    <p class="main__title">Frontend Developer</p>
  `;

  return main;
}

export default Main;