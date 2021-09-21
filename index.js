var i = 0;
var txt = 'for hackers of the professional and beginner';
var speed = 70;
function typing(){
    if (i < txt.length){
        document.getElementById("head").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}

function mouse(event){
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("msmn").style.transition = "0.5s ease";
    document.getElementById("msmn").style.background = "white";
    document.getElementById("msmn").style.marginTop = "-20px";
    document.getElementById("msmn").style.filter = "blur(15px)";
    document.getElementById("msmn").style.position = "sticky";
    document.getElementById("msmn").style.top = y + "px";
    document.getElementById("msmn").style.left = x + "px";
    document.getElementById("msmn").style.width = "20px";
    document.getElementById("msmn").style.height = "20px";
    document.getElementById("msmn").style.borderRadius = "900px";
    document.getElementById("msmn").style.boxShadow = "0px 0px 20px white";
}

function mouseleave(){
    document.getElementById("msmn").style.width = "20px";
    document.getElementById("msmn").style.height = "20px";
    document.getElementById("msmn").style.background = "transparent";
    document.getElementById("msmn").style.boxShadow = "none";
}
