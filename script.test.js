const { afterEach, expect } = require('@jest/globals');
const { describe } = require('yargs');
const nasa = require('./script');
const alert = '[ERROR SYSTEM] - Falha no carregamento da API - Momentaneamente o seu foguete está impedido de decolar!';
const apiRequest = jest.spyOn(nasa, 'getAPI');
afterEach(apiRequest.mockReset);
    
    test('Testando a mensagem de erro em caso de falha na API', async() => {
        apiRequest.mockRejectedValue(alert);
        apiRequest();

        expect(apiRequest).toHaveBeenCalled();
        expect(apiRequest).toHaveBeenCalledTimes(1);
        expect(apiRequest()).rejects.toBe('[ERROR SYSTEM] - Falha no carregamento da API - Momentaneamente o seu foguete está impedido de decolar!');
    });