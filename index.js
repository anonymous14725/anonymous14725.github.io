function character(id,text,speed){
  var i = 0;
  var txt = text;
  var speed = speed;

  function typeWriter() {
    if (i < txt.length) {
      document.getElementById(id).innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
}
