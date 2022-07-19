const sum = require('./sum');

describe('Testa se a função soma funciona:', () => {

    it('4 + 5 = 9 ?', () => {
        expect(sum(4,5)).toBe(9);
    })

    it('0 + 0 = 0 ?', () => {
        expect(sum(0,0)).toBe(0);
    })

    it('numero + string = error ?', () => {
        expect(() => {sum(4,'5')}).toThrow(Error);
    })

    it('mensagem de error é "parameters must be numbers"', () => {
        expect(() => {sum(4,'5')}).toThrow('parameters must be numbers');
    })

})