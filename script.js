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
  setTimeout(showSlides, 10000); // Change image every x s
}
const button = document.querySelector("button");
button.addEventListener("click", onButtonClick);

function onButtonClick() {
  alert(`This is a test!`);
}

/* burger section */
const hamburgerMenu = document.getElementById("hamburger-menu");
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

// Add event listener to update the displayed value
const rangeSlider = document.getElementById("myRange");
const rangeValue = document.querySelector(".range-value");

rangeSlider.addEventListener("input", function () {
  rangeValue.textContent = rangeSlider.value;
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
