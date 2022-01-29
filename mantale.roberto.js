var slideIndex = 1;
arataSlide(slideIndex);


function slideUrmator(n) {
    arataSlide(slideIndex += n);
}


function slideCurent(n) {
    arataSlide(slideIndex = n);
}

function arataSlide(n) {
   
  var i;
  var slides = document.getElementsByClassName("slide");
  var puncte = document.getElementsByClassName("punct");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < puncte.length; i++) {
    puncte[i].className = puncte[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  puncte[slideIndex-1].className += " active";
}
function schimbaText(idk){  
  idk.style.fontWeight = "bold";
  idk.style.fontStyle = "italic";
  idk.style.backgroundColor="grey"; 

}
function schimbaTextLaLoc(idk){  
  idk.style.fontWeight = "normal";
  idk.style.fontStyle= "normal";
  idk.style.backgroundColor= "white"; 
}