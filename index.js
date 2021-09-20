var i = 0;
var txt = 'Hello World';
var speed = 50;

function typing(){
    if (i < txt.length){
        document.getElementById("head").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}
