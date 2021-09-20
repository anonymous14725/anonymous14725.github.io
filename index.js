function character (text,spd)
{
  var i = 0;
  var txt = text;
  var speed = spd;
  function typing(){
      if (i < txt.length){
          document.getElementById("head").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typing, speed);
      }
  }
}
