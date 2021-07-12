import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../CSS/style.scss";
import "./app.js";

import "../Assets/Images/logo.png";
import "../Assets/Images/phone_icon.png";
import "../Assets/Images/header_background.png";
import "../Assets/Images/car_icon.png";
import "../Assets/Images/price_icon.png";
import "../Assets/Images/time_icon.png";
import "../Assets/Images/car_card.png";
import "../Assets/Images/repair.png";
import "../Assets/Images/fuil.png";
import "../Assets/Images/gps.png";
import "../Assets/Images/visa.png";
import "../Assets/Images/master.png";
import "../Assets/Images/mir.png";
import "../Assets/Images/back.png";
import "../Assets/Images/clock.png";
import "../Assets/Images/call.png";
import "../Assets/Images/hand.png";
import "../Assets/Images/date.png";
import "../Assets/Images/time.png";
import "../Assets/Images/down-arrow.png";

let filterButtons = document.querySelectorAll("#filter-buttons button");
filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    filterButtons.forEach((filterButton) => {
      filterButton.style.backgroundColor = "#31cbf9";
      filterButton.style.border = "1px solid #007ee1";
    });
    filterButton.style.backgroundColor = "#007ee1";
    filterButton.style.border = 0;
  });
});

// document.getElementById("full-card__wrapper").addEventListener("click", () => {
//   document.getElementById("full-card__wrapper").style.display = "none";
// });

let getCars = document.querySelectorAll(".get-car");
getCars.forEach((getCar) => {
  getCar.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("call-back__wrapper").style.display = "block";
  });
});

document.getElementById("call-back__wrapper").addEventListener("click", () => {
  document.getElementById("call-back__wrapper").style.display = "none";
});

let hideCradElements1 = document.querySelectorAll(".hide-info1");
let hideCradElements2 = document.querySelectorAll(".hide-info2");
let hideCradElements3 = document.querySelectorAll(".hide-info");

hideCradElements1.forEach((hideCarElement) => {
  hideCarElement.style.display = "none";
});
hideCradElements2.forEach((hideCarElement) => {
  hideCarElement.style.display = "none";
});
hideCradElements3.forEach((hideCarElement) => {
  hideCarElement.style.display = "none";
});

let cardsBody1 = document.getElementsByClassName("card1");
let cardsBody2 = document.getElementsByClassName("card2");
let cardsBody3 = document.getElementsByClassName("card3");

let moreLinks = document.querySelectorAll(".more");

moreLinks[0].addEventListener("click", (e) => {
  e.preventDefault();
  console.log("1");
  hideCradElements1.forEach((hideCarElement) => {
    hideCarElement.style.display = "block";
  });
});
moreLinks[1].addEventListener("click", (e) => {
  e.preventDefault();
  console.log("2");
  hideCradElements2.forEach((hideCarElement) => {
    hideCarElement.style.display = "block";
  });
});
moreLinks[2].addEventListener("click", (e) => {
  e.preventDefault();
  console.log("3");
  hideCradElements3.forEach((hideCarElement) => {
    hideCarElement.style.display = "block";
  });
});

// moreLinks.forEach((moreLink) => {
//   moreLink.addEventListener("click", (e) => {
//     e.preventDefault();
//     // document.getElementById("full-card__wrapper").style.display = "block";
//     hideCradElements.forEach((hideCarElement) => {
//       hideCarElement.style.display = "block";
//       cardsBody.forEach((cardBody) => {
//         cardBody.style.height = "865px";
//       });
//     });
//   });
// });
