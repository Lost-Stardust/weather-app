import "./styles.css";
import { assignIcons } from "./icons";
import { assignData } from "./assign";
import icon from "./assets/magnify.svg";
assignData();
assignIcons();
// Maybe you can put function calls inside a async function here that could await the result of weather data/display of weather data and then while awaiting for that, it could display a loading icon.
