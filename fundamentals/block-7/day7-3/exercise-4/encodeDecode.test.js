const {encode, decode} = require('./encodeDecode');

describe('Testa as funções encode e decode:', () => {
    it('Testa se são funções', () => {
        expect(typeof encode && typeof decode).toBe('function');
    })

    it('Testa se "a,e,i,o,u" são convertidas em "1,2,3,4,5"', () => {
        expect(encode('aeiou')).toBe('12345');
    })

    it('Testa se "1,2,3,4,5" são convertidos em "a,e,i,o,u"', () => {
        expect(decode('12345')).toBe('aeiou');
    })

    it('Testa se demais letras não são convertidas', () => {
        expect(encode('qwrtypçlkjhgfdszxcvbnm')).toBe('qwrtypçlkjhgfdszxcvbnm');
    })

    it('Testa se os demais números não são convertidos', () => {
        expect(decode('06789')).toBe('06789');
    })

    it('Teste se a string que é retornada pela função decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(decode('ad32t').length).toBe(5);
    })

    it('Teste se a string que é retornada pela função encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('adiut').length).toBe(5);
    })
})

