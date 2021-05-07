


const TecnicalSkills = () => {
  
  const tecnicals = document.createElement('div');

  tecnicals.innerHTML = `
    <p>html <img src="${html}" alt="html"></p>
    <p>css <img src="${css}" alt="css"></p>
    <p>javascript <img src="${javascript}" alt="javascript"></p>
    <p>typescript <img src="${typescript}" alt="typescript"></p>
  `;

  return tecnicals;
}

export default TecnicalSkills;