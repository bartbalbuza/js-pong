var keysDown = []

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    if(!keysDown.includes(charCode)){
        keysDown.push(charCode);
    }
};

document.onkeyup = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    if(keysDown.includes(charCode)){
        keysDown.splice(keysDown.indexOf(charCode),1);
    }else{
        console.log("oman i am not good at computer pls to help");
    }
};