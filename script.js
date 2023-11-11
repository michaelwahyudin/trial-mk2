let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

/* scroll section */
  document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.querySelector('a[href="#contact"]');
    
    contactLink.addEventListener("click", function (event) {
      event.preventDefault();
      
      const contactSection = document.getElementById("contact");
      
      // Scroll to the contact section smoothly
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });


/* burger section */
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerContent = document.querySelector(".hamburger-content");

let isOpen = false; // Variable to track the state of the hamburger menu

hamburgerMenu.addEventListener("click", () => {
  isOpen = !isOpen; // Toggle the state

  if (isOpen) {
    hamburgerContent.classList.add("show"); // Add the "show" class to display the content
  } else {
    hamburgerContent.classList.remove("show"); // Remove the "show" class to hide the content
  }
});