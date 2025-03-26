let lastScrollTop = 0;
const header = document.querySelector("header");

document.addEventListener("scroll", function () {
    if (!header) return;

    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll Down → Hide Header
        header.classList.add("hidden");
    } else {
        // Scroll Up → Show Header
        header.classList.remove("hidden");
    }

    lastScrollTop = currentScroll;
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        let currentScrollY = window.scrollY;
        let slides = document.querySelectorAll(".grid");// Select notes
        let fadePercentage = 0.7; // Adjust this (0.7 = 70% of viewport height)

        function handleFade(elements) {
            elements.forEach(element => {
                let position = element.getBoundingClientRect().top;
                let windowHeight = window.innerHeight;

                if (position < windowHeight * fadePercentage) {
                    if (currentScrollY > lastScrollY) {
                        // Scrolling down → fade out later
                        element.style.opacity = "0";
                        element.style.transform = "translateY(20px)";
                        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                    } else {
                        // Scrolling up → fade in
                        element.style.opacity = "1";
                        element.style.transform = "translateY(0)";
                        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
                    }
                }
            });
        }

        // Apply fading effect to both slides and notes
        handleFade(grid);

        lastScrollY = currentScrollY;
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     let lastScrollY = window.scrollY;

//     window.addEventListener("scroll", function () {
//         let currentScrollY = window.scrollY;
//         let slides = document.querySelectorAll(".slide");
//         let notes = document.querySelectorAll(".random-note");
//         let fadeOffset = window.innerHeight * .99;

//         function handleFade(elements) {
//             elements.forEach(element => {
//                 let position = element.getBoundingClientRect().top;
//                 let windowHeight = window.innerHeight;

//                 if (position < windowHeight - fadeOffset) { 
//                     if (currentScrollY > lastScrollY) {
//                         element.style.opacity = "0";
//                         element.style.transform = "translateY(10px)";
//                         element.style.transition = "opacity 5s ease, transform 0.5s ease";
//                     } else {
//                         element.style.opacity = "1";
//                         element.style.transform = "translateY(50)";
//                         element.style.transition = "opacity 5s ease, transform 5s ease";
//                     }
//                 }
//             });
//         }


//         handleFade(slides);
//         handleFade(notes);

//         lastScrollY = currentScrollY;
//     });
// });

// window.addEventListener("scroll", function () {
//     let fullPageImage = document.querySelector(".slide");
//     let scrollPosition = window.scrollY;
//     let fadePointImage = window.innerHeight * 3;
  
//     if (scrollPosition > fadePointImage) {
//       fullPageImage.style.opacity = "0";
//       fullPageImage.style.transform = "translateY(-10px)";
//     } else {
//       fullPageImage.style.opacity = "1";
//       fullPageImage.style.transform = "translateY(0)";
//     }
//   });

// window.addEventListener("scroll", function () {
//     let fullPageImage = document.querySelector(".full-image");
//     let scrollPosition = window.scrollY;
//     let fadePointImage = window.innerHeight * 2;
  
//     if (scrollPosition > fadePointImage) {
//       fullPageImage.style.opacity = "0";
//       fullPageImage.style.transform = "translateY(-10px)";
//     } else {
//       fullPageImage.style.opacity = "1";
//       fullPageImage.style.transform = "translateY(0)";
//     }
//   });
  
//   window.addEventListener("scroll", function () {
//     let fullPageImage = document.querySelector(".full-image-2");
//     let scrollPosition = window.scrollY;
//     let fadePointImage = window.innerHeight * 2.5;
  
//     if (scrollPosition > fadePointImage) {
//       fullPageImage.style.opacity = "0";
//       fullPageImage.style.transform = "translateY(-10px)";
//     } else {
//       fullPageImage.style.opacity = "1";
//       fullPageImage.style.transform = "translateY(0)";
//     }
//   });

//   window.addEventListener("scroll", function () {
//     let fullPageImage = document.querySelector(".full-image-3");
//     let scrollPosition = window.scrollY;
//     let fadePointImage = window.innerHeight * 4;
  
//     if (scrollPosition > fadePointImage) {
//       fullPageImage.style.opacity = "0";
//       fullPageImage.style.transform = "translateY(-10px)";
//     } else {
//       fullPageImage.style.opacity = "1";
//       fullPageImage.style.transform = "translateY(0)";
//     }
//   });