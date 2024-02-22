import axios from 'axios'

// korn
const apiKey = 'C95Y79CT6U7LXXVHUSXJ5ETT7'

// plashta
// const apiKey = 'DQFDWRAXG3D9A4H9UNJ83WFJA'

export const getForecast = (city, start, end) => {
  return (
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${start}/${end}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`
      )
      // .then((response) => console.log(response.data.days))
      .then((response) => response.data.days)
      .catch((error) => {
        console.error('Ошибка при получении данных:', error)
      })
  )
}

export const getTodaysWeather = (city) => {
  return axios
    .get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=${apiKey}&contentType=json&iconSet=icons1`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error('Ошибка при получении данных:', error)
    })
}
