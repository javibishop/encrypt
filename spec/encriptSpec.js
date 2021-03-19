// ver como importar el intelicence de jasmine

const cripto = require('../cryotohelper');
 
describe("test cript", () => {
    clave = 'prueba';
    key = '123456$#@$^@1ERF';
    cripclave = cripto.encriptarCryptoJS(clave, key);
    it("clave generada", () => {
      expect(cripclave.length).toBeGreaterThan(0)
    });
  });


  

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      expect(true).toBe(false);
    });
  });
  
  

