const express = require('express');
const bodyParser = require('body-parser')
const app = express();
//para q funcione en herocu
const cripto = require('./cryotohelper');
const port = process.env.PORT || 3010;

/*middleware es un callback q se ejecuta siempre. */

//se pueden poner cualquier archivo, pero es publico.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/encriptar', (req, res, next) =>{
    const password = req.body.pass;
    if(req.body.crypto && req.body.crypto === 'true'){
        const claveDcript = req.body.keyx || '123456$#@$^@1ERF'
        const cripclave = cripto.encriptarCryptoJS(password, claveDcript);
        res.send(cripclave);
    }else {
        const numero = req.body.numero || 10;
        const encript = cripto.encriptarBCrypt(password, numero);
        res.send(encript);
    }
});


app.post('/desencriptar', (req, res, next) =>{
    const password = req.body.pass;
    if(req.body.crypto){
        const claveDcript = req.body.keyx || '123456$#@$^@1ERF'
        const cripclave = cripto.desEncriptarCryptoJS(password, claveDcript);
        res.send(cripclave);
    }else {
        const numero = req.body.numero || 10;
        const encript = cripto.encriptarBCrypt(password, numero);
        res.send(encript);
    }
});

app.listen(`${port}`, () =>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});