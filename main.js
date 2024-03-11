let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  slideInterval = setInterval(autoPlay, 3000);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  slideInterval = setInterval(autoPlay, 3000);
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

function autoPlay() {
  if (slideIndex < 3) {
    slideIndex++;
    showSlides(slideIndex);
  } else if (slideIndex === 3) {
    slideIndex = 1;
    showSlides(slideIndex);
  }
}

slideInterval = setInterval(autoPlay, 3000);