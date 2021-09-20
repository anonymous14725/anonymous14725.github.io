var i = 0;
var txt = 'for hackers of the professional and beginner';
var speed = 50;

document.addEventListener("load",function(){
    if (i < txt.length)
    {
        document.getElementById("head").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
});

function mouse(event)
{
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("moving").style.transition = "0.5s ease";
    document.getElementById("moving").style.background = "white";
    document.getElementById("moving").style.filter = "blur(15px)";
    document.getElementById("moving").style.position = "sticky";
    document.getElementById("moving").style.top = y + "px";
    document.getElementById("moving").style.left = x + "px";
    document.getElementById("moving").style.width = "50px";
    document.getElementById("moving").style.height = "50px";
    document.getElementById("moving").style.borderRadius = "900px";
    document.getElementById("moving").style.boxShadow = "0px 0px 40px white";
}
function mouseleave()
{
    document.getElementById("moving").style.width = "50px";
    document.getElementById("moving").style.height = "50px";
    document.getElementById("moving").style.background = "transparent";
    document.getElementById("moving").style.boxShadow = "none";
}
