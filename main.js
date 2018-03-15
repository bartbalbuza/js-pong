// pong but this time it's bad
// blame sarene! for this
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function mainLoop(){
    updateLoop();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLoop();
}

function updateLoop(){
    rightPaddle.update();
    leftPaddle.update();
    ball.update();
}

function drawLoop(){
    ctx.fillRect(rightPaddle.x,rightPaddle.y,rightPaddle.width,rightPaddle.height); // i'm so sorry
    ctx.fillRect(leftPaddle.x,leftPaddle.y,leftPaddle.width,leftPaddle.height);
    ctx.fillRect(ball.x,ball.y,ball.width,ball.width);
}

setInterval(mainLoop,1000/30); // locked at 30 fps
