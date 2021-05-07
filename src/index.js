import './styles/main.scss';
import Header from './components/Header';
import Main from './components/Main';



const app = document.getElementById('app');
app.appendChild(Header());
app.appendChild(Main());
// app.appendChild(TecnicalSkills());