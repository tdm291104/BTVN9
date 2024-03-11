let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let clickslides = document.getElementsByClassName("clickslide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < clickslides.length; i++) {
    clickslides[i].className = clickslides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  clickslides[slideIndex-1].className += " active";
}

setInterval(function () 
          {if(slideIndex<3){
            slideIndex++;
            showSlides(slideIndex);
          }else if(slideIndex===3){
            slideIndex=1;
            showSlides(slideIndex);
          }
          },3000)