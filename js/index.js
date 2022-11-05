const body = document.getElementsByTagName('body')[0];
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
    h3.textContent = `Height: ${person.height} | Mass: ${person.mass}`;
    contaner.appendChild(h3);

    const h4 = document.createElement('h4');
    h4.textContent = `Hair Color: ${person.hair_color} || Skin Color: ${person.skin_color}`;
    contaner.appendChild(h4);

    const h5 = document.createElement('h5');
    h5.textContent = `Eye Color: ${person.eye_color} ||| Birth Year: ${person.birth_year} ||| Gender: ${person.gender}`;
    contaner.appendChild(h5);

    const button = document.createElement('button');
    button.textContent = 'Films';
    contaner.appendChild(button);
    jaday.appendChild(contaner);

    button.addEventListener('click', () => {
      const { films } = person;
      const filmPopup = document.createElement('div');
      filmPopup.classList.add('film-popup');
      const exit = document.createElement('span');
      exit.textContent = 'X';
      exit.classList.add('exit');
      filmPopup.appendChild(exit);

      exit.addEventListener('click', () => {
        filmPopup.style.display = 'none';
      });

      films.forEach((film) => {
        fetch(film)
          .then((response) => response.json())
          .then((data) => {
            const popUp = document.createElement('div');
            popUp.classList.add('popUp');

            const h2 = document.createElement('h6');
            h2.classList.add('film-title');
            h2.textContent = data.title;
            popUp.appendChild(h2);

            const opening = document.createElement('p');
            opening.textContent = `${data.opening_crawl}`;
            popUp.appendChild(opening);

            const director = document.createElement('p');
            director.textContent = `Director: ${data.director} || Producer: ${data.producer} || Release Date: ${data.release_date}`;
            popUp.appendChild(director);

            filmPopup.appendChild(popUp);
          });
      });
      body.appendChild(filmPopup);
    });
  });
};

displayData();
