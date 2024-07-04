// ========= right-sidebar ==========
function open_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "0";
  } else {
    console.error("Error: Side panel element not found!");
  }
}
function close_aside() {
  "use strict";
  const sidepanel = document.getElementById("mySidenav");
  if (sidepanel) {
    sidepanel.style.left = "-355px";
  } else {
    console.error("Error: Side panel element not found!");
  }
}

let slid = document.getElementById("slid-btn");
slid.onclick = () => {
  let dropdwon = document.getElementById("slid-drop");
  dropdwon.classList.toggle("aside-dropdwon");
};

// ========= 1.3 Features Section Slider ==========

$(".Features_Slider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});

// ========= 1.8 Testomional Section Slider ==========
$(".Testimonial_Slider").slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});
// =============== Number Animator =============
function animateNumbers(num, finalValue, duration) {
  let start = null;
  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    num.textContent = Math.floor(progress * finalValue);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}
function startNumberAnimation() {
  const numbers = document.querySelectorAll(".number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const finalValue = parseInt(
            entry.target.getAttribute("data-final-value")
          );
          animateNumbers(entry.target, finalValue, 2000);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  numbers.forEach((num) => observer.observe(num));
}
startNumberAnimation();
window.addEventListener("load", startNumberAnimation);
// =============== 1.12 News ============
document.addEventListener("DOMContentLoaded", function () {
  let currentDate = new Date();

  let formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let dateElements = document.getElementsByClassName("date");
  for (let i = 0; i < dateElements.length; i++) {
    dateElements[i].innerText = formattedDate;
  }
});
// ========== 1.13. Footer ==========
document.addEventListener("DOMContentLoaded", function () {
  let currentYear = new Date().getFullYear();

  let yearElement = document.getElementById("year");
  yearElement.innerText = currentYear;
});
