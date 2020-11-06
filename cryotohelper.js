const CryptoJS = require("crypto-js");
const bcrypt = require('bcrypt');

encriptarCryptoJS = (password, claveDcript) => {
    const key = CryptoJS.enc.Utf8.parse(claveDcript);
    const iv = CryptoJS.enc.Utf8.parse(claveDcript);
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(password.toString()), key,
    {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
}

encriptarBCrypt = (clave, numero = 10) => {
    const encript = bcrypt.hashSync(clave, numero);
}

desEncriptarCryptoJS = (password, claveDcript) => {
    // const key = CryptoJS.enc.Utf8.parse(claveDcript);
    // const iv = CryptoJS.enc.Utf8.parse(claveDcript);
    var decrypted = CryptoJS.AES.decrypt(password, claveDcript).toString(CryptoJS.enc.Utf8);
    return decrypted.toString();
}

module.exports.encriptarCryptoJS = encriptarCryptoJS;
module.exports.encriptarBCrypt = encriptarBCrypt;
module.exports.desEncriptarCryptoJS = desEncriptarCryptoJS;