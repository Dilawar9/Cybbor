// right-sidebar
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySideNav");
  if (sidepanel) {
    sidepanel.style.right = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySideNav");
  if (sidepanel) {
    sidepanel.style.right = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

// ========= Features Section Slider ==========

let currentSlide = 0;
const imageSlides = Array.from(document.querySelectorAll(".slider .slide"));
const textSlides = Array.from(
  document.querySelectorAll(".textSlider .text-slide")
);
function showSlide(index) {
  imageSlides.forEach((slide, i) => {
    slide.style.transform = i === index ? "translateX(0)" : "translateX(100%)";
    slide.classList.toggle("active", i === index);
  });
  textSlides.forEach((slide, i) => {
    slide.style.transform = i === index ? "translateX(0)" : "translateX(100%)";
    slide.style.display = i === index ? "flex" : "none";
    slide.classList.toggle("active", i === index);
  });
}
document.getElementById("prev").addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : imageSlides.length - 1;
  showSlide(currentSlide);
});

document.getElementById("next").addEventListener("click", () => {
  currentSlide = currentSlide < imageSlides.length - 1 ? currentSlide + 1 : 0;
  showSlide(currentSlide);
});

showSlide(currentSlide);
// ========= End of Features Section Slider ==========

// ========= Testomional Section Slider ==========

let currentSlide1 = 0;
const imageSlides1 = document.querySelectorAll(".image-slider1 .slide1");
const textSlides1 = document.querySelectorAll(".text-slider1 .slide1");

function showSlide1(index) {
  imageSlides1.forEach((slide, i) => {
    if (i === index) {
      slide.style.transform = "none";
      slide.classList.add("active1");
    } else {
      slide.style.transform = "translateX(100%)";
      slide.classList.remove("active1");
    }
  });

  textSlides1.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
      slide.classList.add("active1");
    } else {
      slide.style.display = "none";
      slide.classList.remove("active1");
    }
  });
}

document.getElementById("prev1").addEventListener("click", () => {
  currentSlide1 =
    currentSlide1 > 0 ? currentSlide1 - 1 : imageSlides1.length - 1;
  showSlide1(currentSlide1);
});

document.getElementById("next1").addEventListener("click", () => {
  currentSlide1 =
    currentSlide1 < imageSlides1.length - 1 ? currentSlide1 + 1 : 0;
  showSlide1(currentSlide1);
});

showSlide1(currentSlide1);

// =========End of Testomional Section Slider ==========
