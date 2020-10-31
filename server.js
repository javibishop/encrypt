const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const bcrypt = require('bcrypt');
const CryptoJS = require("crypto-js");
//para q funcione en herocu
const port = process.env.PORT || 3001;

/*middleware es un callback q se ejecuta siempre. */

//se pueden poner cualquier archivo, pero es publico.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/encriptar', (req, res, next) =>{
    const pass = req.body.pass;
    
    if(req.body.crypto){
        const clave = req.body.keyx || '123456$#@$^@1ERF';
        const key = CryptoJS.enc.Utf8.parse(clave);
        const iv = CryptoJS.enc.Utf8.parse(clave);
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(pass.toString()), key,
        {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        res.send(encrypted.toString());
    }else {
        const numero = req.body.numero || 10;
        const encript = bcrypt.hashSync(pass, numero);
        res.send(encript);
    }
    
});


app.listen(`${port}`, () =>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});