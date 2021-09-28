const url = 'https://images-api.nasa.gov/search?q='
let whatSearch;
let namePlanet;
const sistemaSolar = {
  Sol: 'O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar giram ao seu redor. A distância da Terra ao Sol é de cerca de 150 milhões de quilômetros e a luz solar demora aproximadamente 8 minutos para chegar à Terra.',

  Mercúrio: 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 88 dias terrestres. A sua aparência é brilhante quando observado da Terra e é o planeta que passa a maior parte do tempo sendo o mais próximo do nosso.',

  Vênus: 'Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol. chamado com frequência de planeta irmão da Terra, já que ambos são similares quanto ao tamanho, massa e composição. Vénus é coberto por uma camada opaca de nuvens de ácido sulfúrico altamente reflexivas, impedindo que a sua superfície seja vista do espaço na luz visível.',

  Terra: 'A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior do Sistema Solar. Também chamado de Planeta Azul, é onde vivemos!',

  Marte: 'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.',

  Júpiter: 'Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. É um planeta gasoso, junto com Saturno, Urano e Netuno, e são os quatro gigantes gasosos, isto é, que não são compostos primariamente de matéria sólida.',

  Saturno: 'Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar. Uma das características notáveis é o proeminente sistemas de anéis planetários ao seu redor. De fato, seu sistema de anéis é o maior, mais massivo, brilhante e complexo de todo o Sistema Solar.',

  Urano: 'Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Urano foi também o primeiro planeta a ser descoberto por meio de um telescópio.',

  Netuno: 'Netuno é o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, o planeta é formado por um pequeno núcleo rochoso ao redor do qual encontra-se uma camada formada possivelmente por água, amônia e metano sobre a qual situa-se sua turbulenta atmosfera, constituída predominantemente de hidrogênio e hélio.',
}

function searchImage() {
  const sectionPlanets = document.querySelector('.section-planets');
  sectionPlanets.addEventListener('click', selectPlanet);
}

function getAPI () {
  fetch(`${url}${whatSearch}`)
  .then((response) => response.json())
  .then((element) => {
    for (let index = 0; index < 4; index += 1) {
      const img = document.createElement('img');
      img.src = element.collection.items[index].links[0].href;
      const divImage = document.querySelector(`.image${index + 1}`);
      console.log(divImage);
      divImage.appendChild(img);
    }
  });
}

function selectPlanet(event) {
  const parent = event.target.parentNode;
  const planet = parent.className.split(' ')[1];
  whatSearch = planet;
  namePlanet = parent.children[0].innerText;
  getAPI();
  getInfo();
}

function getInfo() {
  const planets = Object.keys(sistemaSolar);
  const pname = document.querySelector('.planet-name');
  const pdescription = document.querySelector('.planet-description');
  pname.innerText = planets.find((element) => element === namePlanet);
  pdescription.innerText = sistemaSolar[namePlanet];
}

window.onload = () => {
  searchImage();
}

// module.exports = { sectionPlanet, searchImage, getApi, selectPlanet };
