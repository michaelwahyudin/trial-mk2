let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every x s
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

    document.addEventListener("DOMContentLoaded", function () {
      const productsLink = document.querySelector('a[href="#products"]');
      
      productsLink.addEventListener("click", function (event) {
        event.preventDefault();
        
        const productsSection = document.getElementById("products");
        
        // Scroll to the products section smoothly
        productsSection.scrollIntoView({ behavior: "smooth" });
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      const aboutUsLink = document.querySelector('a[href="#aboutUs"]');
      
      aboutUsLink.addEventListener("click", function (event) {
        event.preventDefault();
        
        const aboutUsSection = document.getElementById("aboutUs");
        
        // Scroll to the "About Us" section smoothly
        aboutUsSection.scrollIntoView({ behavior: "smooth" });
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


// Get the night mode switch element
const nightModeSwitch = document.getElementById("night-mode-switch");

// Add an event listener to listen for changes in the switch state
nightModeSwitch.addEventListener("change", () => {
  const body = document.body;
  if (nightModeSwitch.checked) {
    // If the switch is checked, enable night mode (e.g., change background color)
    body.classList.add("night-mode");
  } else {
    // If the switch is unchecked, disable night mode
    body.classList.remove("night-mode");
  }
});