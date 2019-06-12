var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var snake = {
    x: 200,
    y: 200,
    dx: 20,
    dy: 0,
    cells: [],
    numCells: 3
};

var count = 0;

var score = 0;

var food = {
    x: 400,
    y: 400
};

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getScore() {
    document.getElementById('score').innerText = score;
}

function animate() {
    requestAnimationFrame(animate);
    
    count += 1;
    if (count < 5) {
        return;
    }
    count = 0;

    c.clearRect(0, 0, 500, 500);

    getScore();

    snake.x += snake.dx;
    snake.y += snake.dy;

    if (snake.x < 0) {
        snake.x = 480;
    }
    else if (snake.x >= 500) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = 480;
    }
    else if (snake.y >= 500) {
        snake.y = 0;
    }
    snake.cells.unshift({x: snake.x, y: snake.y});

    if (snake.cells.length > snake.numCells) {
        snake.cells.pop();
    }

    c.fillStyle = 'white';
    c.fillRect(food.x, food.y, 19, 19);

    snake.cells.forEach(function(cell, idx) {
        c.fillRect(cell.x, cell.y, 19, 19);

        if (cell.x == food.x && cell.y == food.y) {
            snake.numCells += 1;

            food.x = getRandom(0, 25) * 20;
            food.y = getRandom(0, 25) * 20;

            score += 1;
        }

        for (var i = idx + 1; i < snake.cells.length; i++) {
            if (cell.x == snake.cells[i].x && cell.y == snake.cells[i].y) {
                snake.x = 200;
                snake.y = 200;
                snake.cells = [];
                snake.numCells = 3;
                snake.dx = 20;
                snake.dy = 0;
                score = 0;

                food.x = getRandom(0, 25) * 20;
                food.y = getRandom(0, 25) * 20;
            }
        }
    });
}

document.addEventListener('keydown', function(e) {
    if (e.which == 37 && snake.dx == 0) {
        snake.dx = -20;
        snake.dy = 0;
    }
    else if (e.which == 38 && snake.dy == 0) {
        snake.dy = -20;
        snake.dx = 0;
    }
    else if (e.which == 39 && snake.dx == 0) {
        snake.dx = 20;
        snake.dy = 0;
    }
    else if (e.which == 40 && snake.dy == 0) {
        snake.dy = 20;
        snake.dx = 0;
    }
});

requestAnimationFrame(animate);