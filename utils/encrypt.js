var crypto = require('crypto');
var config = require('../config');

function encrypt(text, algorithm) {
    var hash = crypto.createHash(algorithm);
    hash.update(text);
    return hash.digest('hex');
}

function encryptHmac(text, algorithm, salt) {
    var hmacHash = crypto.createHmac(
        algorithm, salt || config.key.encryptSalt);
    hmacHash.update(text);
    return hmacHash.digest('hex');
}

exports.md5 = function(text) {
    return encrypt(text, 'md5');
};  

exports.sha1 = function(text) {
    return encrypt(text, 'sha1');
};

exports.hmacMd5 = function(text, salt) {
    return encryptHmac(text, 'md5', salt);
};

exports.hmacSha1 = function(text, salt) {
    return encryptHmac(text, 'sha1', salt);
};