import icon from "./assets/magnify.svg";
import { getWeatherData } from "./weather";
const data = await getWeatherData();
console.log(data);
const assignIcons = () => {
  const search = document.querySelector(".search");
  search.src = icon;
};
export { assignIcons };
