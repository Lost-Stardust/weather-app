const assignData = (data) => {
  const desc = document.querySelector(".desc");
  desc.textContent = data.days[0].description;

  const temp = document.querySelector(".temp");
  const feelsLike = document.querySelector(".feelslike");
  temp.textContent = data.days[0].temp + "°C";
  feelsLike.textContent = "Feels like" + " " + data.days[0].feelslike + "°";

  // Array that contains all days, convert datetime property into new Date and use getDay() to extract the day from datetime

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date1 = new Date(data.days[1].datetime);
  const date2 = new Date(data.days[2].datetime);
  const date3 = new Date(data.days[3].datetime);
  const date4 = new Date(data.days[4].datetime);
  const date5 = new Date(data.days[5].datetime);
  const date6 = new Date(data.days[6].datetime);

  const dates = [date1, date2, date3, date4, date5, date6];
  let dateIndex = 0;
  let dayIndex = 1;

  const weekDays = document.querySelectorAll(".weekday");

  for (let i = 0; i < weekDays.length; i++) {
    weekDays[i].children[1].textContent = days[dates[dateIndex].getDay()];
    weekDays[i].children[2].textContent = data.days[dayIndex].temp + "°C";
    dateIndex++;
    dayIndex++;
  }

  // function to convert 24 hour time into 12 hour
  function formatTime(timeString) {
    const [hourString, minute] = timeString.split(":");
    console.log(hourString, minute);
    const hour = +hourString % 24;
    console.log(hour);
    return (hour % 12 || 12) + ":" + minute + (hour < 12 ? "AM" : "PM");
  }

  const riseTime = document.querySelector(".rise-time");
  const setTime = document.querySelector(".set-time");
  riseTime.textContent = formatTime(data.currentConditions.sunrise);
  setTime.textContent = formatTime(data.currentConditions.sunset);
};
export { assignData };
