var phpServer = require('node-php-server');
 
// Create a PHP Server 
phpServer.createServer({
    port: 8081,
    hostname: '127.0.0.1',
    base: '.',
    keepalive: false,
    open: false,
    bin: 'php',
    router: process.env.SSPFORUM + '/server.php'
});
