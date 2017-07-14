//describe(""), assert(), it(), 

//Expectations:

//All of the manifest.json domains should exist, be urls in the form of strings, and be accessible through manifest.domain
//All of the manifest.json domains should be SSL protected.
//The node-php-server function should act as Apache for the forum.js
//The letsencrypt switch should be in the .env file
//Redbird should load the manifest.json
//Redbird should run on port 80 for HTTP and 443 for SSL
require('dotenv').config();
var manifest = require('./manifest.json');
var env = require('dotenv'); 
var http = require('http');
var https = require('https');
var redbird = require('redbird');
var assert = require('chai').assert;

describe("manifest", function () {
        manifest.forEach(
            assert.exists(manifest.domain, ".json exists for each url"));
      });
    it('domains', function() {
      manifest.forEach(
        assert.isString(manifest.domain, "are strings"));
      manifest.forEach(
        http.get(manifest.domain, function (response) {
          assert(response() !== 'error', "are live sites");
      }))});
    it('should be SSL protected', function () {
      manifest.forEach(
        https.request(manifest.domain, function (response) { //delay until entire thing is loaded
            response() !== 'error';
}))})});

describe("node-php-server", function () {
    it('should act as Apache for forum.js', function () {
        var url = process.env.SSPFORUM;
        url.onload = function() //delay this until entire thing is loaded
	    {
            console.log('Server is working!');
	    }
})});

describe(".env file", function () {
    it('contains the letsencrypt switch as well as the domain email', function() {
      env.email = process.env.EMAIL; 
})});

describe("Redbird", function () {
      assert.equal(redbird, manifest, "has the manifest.json contents"); //delay until entire thing is loaded
});

describe("Redbird", function () {
    it('runs on port 80 for HTTP and port 443 on HTTPS', function () {
      redbird.port = 80;
      redbird.ssl.port = 443;
})});