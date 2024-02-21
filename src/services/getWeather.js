import axios from 'axios'

const apiKey = 'C95Y79CT6U7LXXVHUSXJ5ETT7'

export const getForecast = () => {
  return axios
    .get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Singapore/2024-02-01/2024-02-14?unitGroup=metric&include=days&key=${apiKey}&contentType=json`
    )
    .then((response) => console.log(response.data))
    .then((response) => response.data)
}

export const getTodaysWeather = (city) => {
  return axios
    .get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json`
    )
    .then((response) => console.log(response.data))
    .then((response) => response.data)
}
