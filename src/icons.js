// import all icons
import clearday from "./assets/clear-day.svg";
import clearnight from "./assets/clear-night.svg";
import cloudy from "./assets/cloudy.svg";
import fog from "./assets/fog.svg";
import hail from "./assets/hail.svg";
import partlycloudyday from "./assets/partly-cloudy-day.svg";
import partlycloudynight from "./assets/partly-cloudy-night.svg";
import rainsnowshowersday from "./assets/rain-snow-showers-day.svg";
import rainsnowshowersnight from "./assets/rain-snow-showers-night.svg";
import rainsnow from "./assets/rain-snow.svg";
import rain from "./assets/rain.svg";
import showersday from "./assets/showers-day.svg";
import showersnight from "./assets/showers-night.svg";
import sleet from "./assets/sleet.svg";
import snowshowersday from "./assets/snow-showers-day.svg";
import snowshowersnight from "./assets/snow-showers-night.svg";
import snow from "./assets/snow.svg";
import thunderrain from "./assets/thunder-rain.svg";
import thundershowersday from "./assets/thunder-showers-day.svg";
import thundershowersnight from "./assets/thunder-showers-night.svg";
import thunder from "./assets/thunder.svg";
import wind from "./assets/wind.svg";

const icons = {
  clearday,
  clearnight,
  cloudy,
  fog,
  hail,
  partlycloudyday,
  partlycloudynight,
  rainsnowshowersday,
  rainsnowshowersnight,
  rainsnow,
  rain,
  showersday,
  showersnight,
  sleet,
  snowshowersday,
  snowshowersnight,
  snow,
  thunderrain,
  thundershowersday,
  thundershowersnight,
  thunder,
  wind,
};

const assignIcons = (data) => {
  let currIcon = data.days[0].icon;
  currIcon = currIcon.replace(/-/g, "");
  console.log(currIcon);
  const currImg = document.querySelector(".curr-icon");
  currImg.src = icons[currIcon];

  const weekDays = document.querySelectorAll(".weekday");
  let dayCount = 0;
  for (let i = 0; i < weekDays.length; i++) {
    ++dayCount;
    weekDays[i].children[0].firstChild.src =
      icons[data.days[dayCount].icon.replace(/-/g, "")];
  }
};
export { assignIcons };
