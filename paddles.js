var rightPaddle = {
    x:750,
    y:10,
    width:15,
    height:100,
}

rightPaddle.update = function(){
    if(keysDown.includes(40)){ // down
        this.y += 4
    }else if(keysDown.includes(38)){ // up
        this.y -= 4
    }
    
    if(this.y < 0){
        this.y = 0
    }else if(this.y > canvas.height-this.height){
        this.y = canvas.height-this.height
    }
}

var leftPaddle = {
    x:35,
    y:10,
    width:15,
    height:100,
}

leftPaddle.update = function(){
    if(keysDown.includes(83)){ // W
        this.y += 4
    }else if(keysDown.includes(87)){ // S 
        this.y -= 4
    }
    
    // TODO: separate this function
    if(this.y < 0){
        this.y = 0
    }else if(this.y > canvas.height-this.height){
        this.y = canvas.height-this.height
    }
}