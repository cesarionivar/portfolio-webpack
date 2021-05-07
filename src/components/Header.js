import Logo from '../assets/logo.png';
import Twitter from '../assets/twitter.png';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';

const Header = () => {

  const header = document.createElement('header');
  header.classList.add('header');

  header.innerHTML = `
    <div class="header__logo">
      <a href="index.html"><img src="${Logo}" alt="Cesario's logo"></a>
    </div>
    <div class="header__social">
      <a href="https://twitter.com/cesarionivar" target="_blank"><img src="${Twitter}" alt="Twitter"></a>
      <a href="https://www.linkedin.com/in/cesarionivar/" target="_blank"><img src="${Linkedin}" alt="Linkedin"></a>
      <a href="https://github.com/cesarionivar" target="_blank"><img src="${Github}" alt="Github"></a>
    </div>
    <a href="#projects" class="header__btnProjects">Projects</a>
  `;

  return header;

}

export default Header;