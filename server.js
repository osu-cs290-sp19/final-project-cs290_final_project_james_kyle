console.log("Hello Server");
var http = require('http');
var fs = require('fs');

var server = http.createServer(requestHandler);
var snake = fs.readFileSync('public/snake.html', 'utf8');
var snakeJS = fs.readFileSync('public/snake.js', 'utf8');

function requestHandler(request, response) {
    if (request.url == '/snake.html' || request.url == '/' || request.url == '') {
        console.log("Responding with snake page");
        response.write(snake);
        response.end();
    } else if (request.url == '/snake.js') {
        console.log("Responding with JS page");
        response.write(snakeJS);
        response.end();
    }
    response.end();
}

server.listen(3000);