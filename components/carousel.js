var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("carousel");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 5 seconds
}

// CAMBIO: Actualizar automáticamente el año de copyright
var year = new Date().getFullYear(); 
document.getElementById('copyright').innerText = "Copyright © " + year + " Regocijo Floreria Online";
