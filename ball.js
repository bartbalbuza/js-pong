var ball = {
    x:400,
    y:300,
    width:10,
    xSpeed:-1,
    ySpeed:-1,
    speed:4,
}

ball.update = function(){
    this.x += this.xSpeed*this.speed;
    this.y += this.ySpeed*this.speed;
    
    if(this.y < 0){
        this.y = 0;
        this.ySpeed *= -1;
    }else if(this.y > canvas.height-this.width){
        this.y = canvas.height-this.width;
        this.ySpeed *= -1;
    }
    
    //TODO: separate this
    // collision detection
    // i'm so sorry
    if(this.y + this.width  > rightPaddle.y &&
       this.y < rightPaddle.y + rightPaddle.height &&
       this.x + this.width > rightPaddle.x &&
       this.x < rightPaddle.x + rightPaddle.width){
        this.xSpeed *= -1
    }
    
    if(this.y + this.width  > leftPaddle.y &&
       this.y < leftPaddle.y + leftPaddle.height &&
       this.x + this.width < leftPaddle.x &&
       this.x > leftPaddle.x + leftPaddle.width){
        this.xSpeed *= -1
    }
}