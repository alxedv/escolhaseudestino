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

window.onload = () => {
  searchImage();
}
