const http = require("http");
const booksRoute = require("./Routes/books");

// Creating a server
const server = http.createServer(booksRoute.requestHandler);

module.exports = server;
