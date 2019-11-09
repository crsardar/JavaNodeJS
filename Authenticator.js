/**
 * @author Chittaranjan Sardar
 */

var fs = require('fs');
var JWT = require('jsonwebtoken');

var privateKey = fs.readFileSync('./src/main/resources/my_key', 'utf8');
var publicKey = fs.readFileSync('./src/main/resources/my_key.pub', 'utf8');

var jwtOptions = {

    issuer : 'Chittaranjan Sardar',
    subject: 'JWT Cross Platforms',
    audience: 'https://github.com/crsardar',
    expiresIn: '5m',
    algorithm: "RS256"
};


let token = JWT.sign({user: 'CRSARDAR'}, privateKey, jwtOptions);
console.log("generated token = " + token);

var verifyResult = JWT.verify(token, publicKey, jwtOptions);
console.log("Verification has passed : " + JSON.stringify(verifyResult));
   