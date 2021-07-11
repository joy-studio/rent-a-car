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
