//describe(""), assert(), it(), 

//Expectations:

//All of the manifest.json domains should exist, be urls in the form of strings, and be accessible through manifest.domain
//All of the manifest.json domains should be SSL protected.
//The node-php-server function should act as Apache for the forum.js
//The letsencrypt switch should be in the .env file
//Redbird should load the manifest.json
//Redbird should run on port 80 for HTTP and 443 for SSL
var manifest = require('manifest.json');
var env = require('index.env'); 

describe("manifest", function() {
    it('should exist for each url', function() {
      manifest.forEach(
        manifest.domain != undefined;
    )});
    it('should be a valid url', function () {
      manifest.forEach(
        typeof manifest.domain = 'string';
        //node http request goes here
    )});
    it('should be SSL protected', function () {
      manifest.forEach(
        //node http_s_ request goes here, this function needs to be delayed until all of the other stuff is loaded
    )});
});

describe("node-php-server", function () {
    it('should act as Apache for forum.js', function () {
        //uhh...need a non-terminal method to do this
})});

describe(".env file", function () {
    it('contains the letsencrypt switch as well as the domain email', function() {
      env.email = process.env.EMAIL; //probably not the right syntax
})});

//Redbird checks go here