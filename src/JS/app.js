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

let getCars = document.querySelectorAll(".get-car");
getCars.forEach((getCar) => {
  getCar.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById("call-back__wrapper").style.display = "block";
  });
});

document.getElementById("call-back__wrapper").addEventListener("click", () => {
  document.getElementById("call-back__wrapper").style.display = "none";
});

// let hideCradElements1 = document.querySelectorAll(".hide-info1");
// let hideCradElements2 = document.querySelectorAll(".hide-info2");
// let hideCradElements3 = document.querySelectorAll(".hide-info");

// hideCradElements1.forEach((hideCarElement) => {
//   hideCarElement.style.display = "none";
// });
// hideCradElements2.forEach((hideCarElement) => {
//   hideCarElement.style.display = "none";
// });
// hideCradElements3.forEach((hideCarElement) => {
//   hideCarElement.style.display = "none";
// });

// let cardsBody1 = document.getElementsByClassName("card1");
// let cardsBody2 = document.getElementsByClassName("card2");
// let cardsBody3 = document.getElementsByClassName("card3");

// let moreLinks = document.querySelectorAll(".more");
// let openFlag = 0;

// moreLinks[0].addEventListener("click", (e) => {
//   e.stopPropagation();
//   e.preventDefault();
//   console.log("1");
//   hideCradElements1.forEach((hideCarElement) => {
//     hideCarElement.style.display = "block";
//     openFlag = 1;
//   });
// });
// moreLinks[1].addEventListener("click", (e) => {
//   e.stopPropagation();
//   e.preventDefault();
//   console.log("2");
//   hideCradElements2.forEach((hideCarElement) => {
//     hideCarElement.style.display = "block";
//     openFlag = 1;
//   });
// });
// moreLinks[2].addEventListener("click", (e) => {
//   e.stopPropagation();
//   e.preventDefault();
//   console.log("3");
//   hideCradElements3.forEach((hideCarElement) => {
//     hideCarElement.style.display = "block";
//     openFlag = 1;
//   });
// });

// document.body.addEventListener("click", () => {
//   console.log("qwe");
//   if (openFlag === 1) {
//     hideCradElements1.forEach((hideCarElement) => {
//       hideCarElement.style.display = "none";
//     });
//     hideCradElements2.forEach((hideCarElement) => {
//       hideCarElement.style.display = "none";
//     });
//     hideCradElements3.forEach((hideCarElement) => {
//       hideCarElement.style.display = "none";
//     });
//   }
// });

let upButton = document.getElementById("up-button");
upButton.style.display = "block";
upButton.style.visibility = "hidden";
// upButton.style.position = "absolute";
// upButton.style.top = window.innerHeight - 100 + "px";
// upButton.style.right = "10px";

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY > 800) {
    upButton.style.visibility = "visible";
  } else {
    upButton.style.visibility = "hidden";
  }
});

let moreLinks = document.getElementsByClassName("more");

for (let i = 0; i < moreLinks.length; i++) {
  for (
    let j = 0;
    j < moreLinks[i].parentNode.querySelectorAll("*").length;
    j++
  ) {
    if (
      moreLinks[i].parentNode.querySelectorAll("*")[j].className ===
        "hide-info" ||
      moreLinks[i].parentNode.querySelectorAll("*")[j].className ===
        "full-card__text hide-info"
    ) {
      moreLinks[i].parentNode.querySelectorAll("*")[j].style.display = "none";
    }
  }
}

for (let i = 0; i < moreLinks.length; i++) {
  moreLinks[i].addEventListener("click", qwe);
}

function qwe(event) {
  event.stopPropagation();
  event.preventDefault();
  console.log(event.target.parentNode.querySelectorAll("*"));
  for (
    let j = 0;
    j < event.target.parentNode.querySelectorAll("*").length;
    j++
  ) {
    if (
      event.target.parentNode.querySelectorAll("*")[j].className ===
        "hide-info" ||
      event.target.parentNode.querySelectorAll("*")[j].className ===
        "full-card__text hide-info"
    ) {
      event.target.parentNode.querySelectorAll("*")[j].style.display = "block";
      console.log("hide");
    }
  }
}

document.body.addEventListener("click", () => {
  for (let i = 0; i < moreLinks.length; i++) {
    for (
      let j = 0;
      j < moreLinks[i].parentNode.querySelectorAll("*").length;
      j++
    ) {
      if (
        moreLinks[i].parentNode.querySelectorAll("*")[j].className ===
          "hide-info" ||
        moreLinks[i].parentNode.querySelectorAll("*")[j].className ===
          "full-card__text hide-info"
      ) {
        moreLinks[i].parentNode.querySelectorAll("*")[j].style.display = "none";
      }
    }
  }
});
