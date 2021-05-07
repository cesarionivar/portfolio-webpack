import './styles/main.scss';
import Header from './components/Header';
import Main from './components/Main';
// import TecnicalSkills from './components/TecnicalSkills';


const app = document.getElementById('app');
app.appendChild(Header());
app.appendChild(Main());
// app.appendChild(TecnicalSkills());