var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var highscores = {
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0
};

var count = 0;
var score = 0;

var snake = {
    x: 200,
    y: 200,
    dx: 20,
    dy: 0,
    cells: [],
    numCells: 3
};

var food = {
    x: 400,
    y: 400
};

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

function drawHighScores() {
    document.getElementById('score_one').innerText = highscores.b;
    document.getElementById('score_two').innerText = highscores.c;
    document.getElementById('score_three').innerText = highscores.d;
    document.getElementById('score_four').innerText = highscores.e;
    document.getElementById('score_five').innerText = highscores.f;
    document.getElementById('score_six').innerText = highscores.g;
    document.getElementById('score_seven').innerText = highscores.h;
    document.getElementById('score_eight').innerText = highscores.i;
    document.getElementById('score_nine').innerText = highscores.j;
    document.getElementById('score_ten').innerText = highscores.k;
}

function updateHighScores() {
    if (score > highscores.k) {
        if (score > highscores.j) {
            if (score > highscores.i) {
                if (score > highscores.h) {
                    if (score > highscores.g) {
                        if (score > highscores.f) {
                            if (score > highscores.e) {
                                if (score > highscores.d) {
                                    if (score > highscores.c) {
                                        if (score > highscores.b) {
                                            highscores.k = highscores.j;
                                            highscores.j = highscores.i;
                                            highscores.i = highscores.h;
                                            highscores.h = highscores.g;
                                            highscores.g = highscores.f;
                                            highscores.f = highscores.e;
                                            highscores.e = highscores.d;
                                            highscores.d = highscores.c;
                                            highscores.c = highscores.b;
                                            highscores.b = score;
                                        }
                                        else {
                                            highscores.k = highscores.j;
                                            highscores.j = highscores.i;
                                            highscores.i = highscores.h;
                                            highscores.h = highscores.g;
                                            highscores.g = highscores.f;
                                            highscores.f = highscores.e;
                                            highscores.e = highscores.d;
                                            highscores.d = highscores.c;
                                            highscores.c = score;
                                        }
                                    }
                                    else {
                                        highscores.k = highscores.j;
                                        highscores.j = highscores.i;
                                        highscores.i = highscores.h;
                                        highscores.h = highscores.g;
                                        highscores.g = highscores.f;
                                        highscores.f = highscores.e;
                                        highscores.e = highscores.d;
                                        highscores.d = score;
                                    }
                                }
                                else {
                                    highscores.k = highscores.j;
                                    highscores.j = highscores.i;
                                    highscores.i = highscores.h;
                                    highscores.h = highscores.g;
                                    highscores.g = highscores.f;
                                    highscores.f = highscores.e;
                                    highscores.e = score;
                                }
                            }
                            else {
                                highscores.k = highscores.j;
                                highscores.j = highscores.i;
                                highscores.i = highscores.h;
                                highscores.h = highscores.g;
                                highscores.g = highscores.f;
                                highscores.f = score;
                            }
                        }
                        else {
                            highscores.k = highscores.j;
                            highscores.j = highscores.i;
                            highscores.i = highscores.h;
                            highscores.h = highscores.g;
                            highscores.g = score;
                        }
                    }
                    else {
                        highscores.k = highscores.j;
                        highscores.j = highscores.i;
                        highscores.i = highscores.h;
                        highscores.h = score;
                    }
                }
                else {
                    highscores.k = highscores.j;
                    highscores.j = highscores.i;
                    highscores.i = score;
                }
            }
            else {
                highscores.k = highscores.j;
                highscores.j = score;
            }
        }
        else {
            highscores.k = score;
        }
    }
}

function getScore() {
    document.getElementById('score').innerText = score;
}

const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, '#171E26');
backgroundGradient.addColorStop(1, '#3F586B');

function animate() {
    requestAnimationFrame(animate);
    
    count += 1;
    if (count < 5) {
        return;
    }
    count = 0;

    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, 500, 500);

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

    if (snake.numCells < snake.cells.length) {
        snake.cells.pop();
    }

    c.fillStyle = 'white';
    c.fillRect(food.x, food.y, 19, 19);

    snake.cells.forEach(function(cell, idx) {
        c.fillRect(cell.x, cell.y, 19, 19);

        if (cell.x == food.x && cell.y == food.y) {
            snake.numCells += 1;

            food.x = Math.floor(Math.random() * 25) * 20;
            food.y = Math.floor(Math.random() * 25) * 20;

            score += 1;
        }

        for (var i = idx + 1; i < snake.cells.length; i++) {
            if (cell.x == snake.cells[i].x && cell.y == snake.cells[i].y) {
                alert('GAME OVER\nScore:' + score);
                updateHighScores();
                drawHighScores();
                snake.x = 200;
                snake.y = 200;
                snake.cells = [];
                snake.numCells = 3;
                snake.dx = 20;
                snake.dy = 0;
                score = 0;

                food.x = Math.floor(Math.random() * 25) * 20;
                food.y = Math.floor(Math.random() * 25) * 20;
            }
        }
    });
}

drawHighScores();
requestAnimationFrame(animate);