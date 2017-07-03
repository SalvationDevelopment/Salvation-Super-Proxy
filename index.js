require('dotenv').config();
var manifest = require("./manifest.json"); 

var redbird = new require('redbird')({
  port: 80,
  ssl: {
    port: 443,
    cert: "./node_modules/redbird/hl-tests/letsencrypt/certs/dev-cert.pem",
    keys: "./node_modules/redbird/hl-tests/letsencrypt/certs/dev-key.pem",
    },
  letsencrypt: {
     path: __dirname + "/certs",
    }


});

manifest.forEach(function (manifest) {
    redbird.register(manifest.domain, manifest.url, {
	ssl: {
     letsencrypt: { 
      email: process.env.EMAIL, // Domain owner/admin email
     production: false, //WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
}, {ssl: {
     redirectPort: 80,
     key: "./node_modules/redbird/hl-tests/letsencrypt/certs/dev-key.pem",
     cert: "./node_modules/redbird/hl-tests/letsencrypt/certs/dev-cert.pem",
}})});