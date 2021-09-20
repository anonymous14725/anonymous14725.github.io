var i = 0;
var txt = 'for hackers of the professional and beginner';
var speed = 50;

function typing(){
    if (i < txt.length){
        document.getElementById("head").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}
