const url = 'https://images-api.nasa.gov/search?q='
let whatSearch;

function selectPlanet(event) {
  const planet = event.target.innerText;
  whatSearch = planet;
  getAPI();
}

function searchImage() {
  const sectionPlanets = document.querySelector('.section-planets');
  sectionPlanets.addEventListener('click', selectPlanet);
}

function getAPI () {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  fetch(`${url}${whatSearch}`)
  .then((response) => response.json())
  .then((element) => img.src = element.collection.items[0].links[0].href);
  body.appendChild(img)
}

const sectionPlanets = document.querySelector('.section-planets');
sectionPlanets.addEventListener('click', selectPlanet);

function selectPlanet(event) {
  const parent = event.target.parentNode;
  const planet = parent.className.split(' ')[1];
  whatSearch = planet;
  getAPI();
}

window.onload = () => {
  searchImage();
}

module.exports = { sectionPlanet, searchImage, getApi, selectPlanet };
