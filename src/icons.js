import { getWeatherData } from "./weather";
// import all icons
import clearday from "./assets/clear-day.png";
import clearnight from "./assets/clear-night.png";
import cloudy from "./assets/cloudy.png";
import fog from "./assets/fog.png";
import hail from "./assets/hail.png";
import partlycloudyday from "./assets/partly-cloudy-day.png";
import partlycloudynight from "./assets/partly-cloudy-night.png";
import rainsnowshowersday from "./assets/rain-snow-showers-day.png";
import rainsnowshowersnight from "./assets/rain-snow-showers-night.png";
import rainsnow from "./assets/rain-snow.png";
import rain from "./assets/rain.png";
import showersday from "./assets/showers-day.png";
import showersnight from "./assets/showers-night.png";
import sleet from "./assets/sleet.png";
import snowshowersday from "./assets/snow-showers-day.png";
import snowshowersnight from "./assets/snow-showers-night.png";
import snow from "./assets/snow.png";
import thunderrain from "./assets/thunder-rain.png";
import thundershowersday from "./assets/thunder-showers-day.png";
import thundershowersnight from "./assets/thunder-showers-night.png";
import thunder from "./assets/thunder.png";
import wind from "./assets/wind.png";

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

const data = await getWeatherData();

let currIcon = data.days[0].icon;
currIcon = currIcon.replace(/-/g, "");
console.log(currIcon);

const assignIcons = () => {
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
