//scroll to top
document.addEventListener("DOMContentLoaded", function () {
  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Use smooth scrolling animation
    });
  }
  scrollToTop();
});

// Call the scrollToTop function after the page loads

$(function () {
  $(window).scroll(function () {
    var top_offset = $(window).scrollTop();
    if (top_offset < 50) {
      $(".navigation").removeClass("sticky");
    }
  });
});

$(window).on("load", function () {
  $(".preloader").addClass("loaded");
});

// // set lightbox img max height
// const wHeight = $(window).height();
// $(".lightbox-img").css("height", wHeight + "px");

// //lightbox
// $(".work-item-inner").click(function () {
//   index = $(this).parent(".work-item").index();
//   $(".lightbox").addClass("open");
//   lightboxSlideShow();
// });
// $(".lightbox .prev").click(function () {
//   if (index == 0) {
//     index = totalWorkItems - 1;
//   } else {
//     index--;
//   }
//   lightboxSlideShow();
// });
// $(".lightbox .next").click(function () {
//   if (index == totalWorkItems - 1) {
//     index = 0;
//   } else {
//     index++;
//   }
//   lightboxSlideShow();
// });

// //close lightbox
// $(".lightbox-close").click(function () {
//   $(".lightbox").removeClass("open");
// });

// //close lightbox when clicked outside of img-box
// $(".lightbox").click(function (event) {
//   if ($(event.target).hasClass("lightbox")) {
//     $(this).removeClass("open");
//   }
// });

// function lightboxSlideShow() {
//   const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
//   const category = $(".work-item").eq(index).find("h4").html();
//   $(".lightbox-img").attr("src", imgSrc);
//   $(".lightbox-category").html(category);
//   $(".lightbox-counter").html(totalWorkItems + "/" + (index + 1));
// }

// navigation bar
(function ($) {
  $(function () {
    //  open and close nav
    $("#navbar-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    // Hamburger toggle
    $("#navbar-toggle").on("click", function () {
      this.classList.toggle("active");
    });

    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".navbar-dropdown").slideToggle("slow");

      // Close dropdown when select another dropdown
      $(".navbar-dropdown").not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });

    // Click outside the dropdown will remove the dropdown class
    $("html").click(function () {
      $(".navbar-dropdown").hide();
    });
  });
})(jQuery);

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.querySelector(".navigation");
console.log(navigation);

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
console.log(sticky);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//Scroll Animation
// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500,
  left: 0,
  behavior: "smooth",
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 100, // could be negative value
  left: 0,
  behavior: "smooth",
});

//Redirection to another page
const workitem = document.getElementsByClassName("work-item");
console.log(window.location.host);

for (var i = 0; i < workitem.length; i++) {
  workitem[i].addEventListener("click", () => {
    const currentUrl = window.location.host;
    window.location.href = "gallery.html";
  });
}

//Video Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    dots: true,
    autoplay: true,
    lazyLoad: true,
    responsive: {
      480: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
});

// $(".owl-carousel").owlCarousel({
//   items: 1,
//   merge: true,
//   loop: true,
//   margin: 10,
//   video: true,
//   lazyLoad: true,
//   center: true,
//   responsive: {
//     480: {
//       items: 2,
//     },
//     600: {
//       items: 4,
//     },
//   },
// });

//image changing in profile section
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const images = ["img/slide/1.jpeg", "img/slide/2.jpeg", "img/slide/3.jpeg"]; // Add more image URLs here
  let currentIndex = 0;
  const interval = 3000; // 3 seconds

  const imageElement = document.getElementById("image_slide");

  // Function to change the image and add/remove the 'visible' class for animation
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    imageElement.classList.remove("visible");

    // We use setTimeout to allow the browser to remove the 'visible' class before adding it again.
    // This triggers the CSS animation on each image change.
    setTimeout(() => {
      imageElement.classList.add("visible");
    }, 10);
  }

  // Change the image at regular intervals
  setInterval(changeImage, interval);
});

//Form submission

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        setTimeout(() => {
          status.innerHTML = "";
        }, 4000);
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
