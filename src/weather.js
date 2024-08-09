const getWeatherData = async (loc) => {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=SF29LX5N55MTZUTLHKL48R3R6`
  );
  const data = await response.json();
  return data;
};
export { getWeatherData };
