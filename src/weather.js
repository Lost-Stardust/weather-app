const getWeatherData = async () => {
  async function getWeather(loc) {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=SF29LX5N55MTZUTLHKL48R3R6`
    );
    const data = await response.json();
    console.log(data);
    return data;
  }
  return getWeather("london");
  // Make a function that filters through the data from the response and makes an object of data that you want the app to display.
  async function getData(loc) {
    const data = await getWeather(loc);
    const dataObj = {};
    // data > currentConditions > [conditions, icon, temp, feelslike, uvindex]
    dataObj.currentConditions = {
      conditions: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      temp: data.currentConditions.temp,
      feelslike: data.currentConditions.feelslike,
      uvindex: data.currentConditions.uvindex,
    };
    // data > days > [15], take maybe 7 for a weekly simple weather overview on the side? show perhaps icons, temp, conditions/description.
    dataObj.days = data.days;

    console.log(dataObj);
    return dataObj;
  }

  const city = document.querySelector("#search");
  console.log(city);
};
export { getWeatherData };
