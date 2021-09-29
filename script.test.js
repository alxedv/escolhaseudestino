const { it, expect, test } = require('@jest/globals');
const { get } = require('http');
const { describe } = require('yargs');
const nasa = require('./script');

const imgTerra = 'https://images-assets.nasa.gov/video/Earth Views/Earth Views~thumb.jpg';
    

nasa.getAPI = jest.fn().mockImplementation( () => {
    // const body = document.querySelector('body');
    let img;
    fetch('https://images-api.nasa.gov/search?q=earth')
    .then((response) => response.json())
    .then((element) => img = element.collection.items[0].links[0].href);
    return img;
    // body.appendChild(img)
  });


    test('Teste', async () => {
        const teste = await nasa.getAPI()
        expect(teste).toBe(imgTerra);
    });

