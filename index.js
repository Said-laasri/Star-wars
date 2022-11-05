const jaday = document.querySelector('.jaday');

const displayData = async () => {
  const response = await fetch('https://swapi.dev/api/people/?page=1');
  const data = await response.json();
  const people = data.results;
  people.forEach((person) => {
    const contaner = document.createElement('div');
    contaner.classList.add('container');

    const h2 = document.createElement('h2');
    h2.textContent = person.name;
    contaner.appendChild(h2);

    const h3 = document.createElement('h3');
    h3.textContent = `Height:${person.height} Mass:${person.mass}`;
    contaner.appendChild(h3);

    const h4 = document.createElement('h4');
    h4.textContent = `Hair Color:${person.hair_color} Skin Color:${person.skyn_color}`;
    contaner.appendChild(h4);

    const h5 = document.createElement('h5');
    h5.textContent = `Eye Color:${person.eye_color} Birth Year:${person.birth_year} Gender:${person.gender}`;
    contaner.appendChild(h5);

    jaday.appendChild(contaner);
  });
};

displayData();
