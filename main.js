var http = require("http");
var tablero = require("./tablero");
http.createServer(function(respuesta) {
    respuesta.writeHead(200, { 'content-type': 'text/plain' });
    respuesta.end(
        tablero.crear()
    );
}).listen(9091);