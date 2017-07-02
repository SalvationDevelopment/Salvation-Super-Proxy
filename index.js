require('dotenv').config();
var manifest = require('manifest.json'); //this is how you load stuff right?

var redbird = new require('redbird')({
  port: 80,
  ssl: {
    port: 443,
     //certs go here iirc
    
    }








});

redbird.register("YGOSalvation", process.env.SITE_MAIN, {
	ssl: {
    letsencrypt: {
      email: process.env.EMAIL, // Domain owner/admin email
      //production: true, WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
    }
  }
});