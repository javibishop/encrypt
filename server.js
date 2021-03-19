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
		
		// const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(pass.toString()), key, config);
        // const encrip = encrypted.toString();
        // const decriptedString = CryptoJS.AES.decrypt(encrip, key, config).toString(CryptoJS.enc.Utf8);
        // //const deencrypted = CryptoJS.AES.decrypt(encrip, key, config);
        // //let comp = bcrypt.compareSync(pass, r2);
        // res.send({encrip, decriptedString});
		
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