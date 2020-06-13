// etablit la communication entre tout
const http = require('http');

// les routes
const app = require('./app');

// server local
const server = http.createServer(app);

// port 3000
server.listen(3000);