const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função myFizzBuzz:', () => {    
    it('Teste divisível por 3 e 5 = fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    })

    it('Teste divisível por 3 = fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    })

    it('Teste divisível por 5 = buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    })

    it('Teste não divisível por 3 ou 5 = fizzbuzz', () => {
        expect(myFizzBuzz(7)).toBe(7);
    })

    it('Teste parâmetro que não é um número', () => {
        expect(myFizzBuzz('')).toBeFalsy();
    })
})