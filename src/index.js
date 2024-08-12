import "./styles.css";
import { assignIcons } from "./icons";
import { assignData } from "./assign";
import icon from "./assets/magnify.svg";
import sunset from "./assets/weather-sunset-down.svg";
import sunrise from "./assets/weather-sunset-up.svg";
import loadingIcon from "./assets/loading.svg";
import { loading } from "./loading";
import { getWeatherData } from "./weather";
const searchBar = document.querySelector("#search");
const submit = document.querySelector('button[type="submit"]');
// let dataa;
submit.addEventListener("click", async (event) => {
  event.preventDefault();
  loading(true);
  // Run imported function that shows a loading icon
  const data = await getWeatherData(searchBar.value);
  console.log(data);
  // Run again to remove loading icon
  loading(false);
  assignData(await data);
  assignIcons(await data);
});
// Maybe you can put function calls inside a async function here that could await the result of weather data/display of weather data and then while awaiting for that, it could display a loading icon.
