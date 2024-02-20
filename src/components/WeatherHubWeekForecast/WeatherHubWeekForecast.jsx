import img from './../../images/w.jpg'
import css from './weatherHubWeekForecast.module.scss'
const weekforecast = [
  { id: 1, day: 'Monday', img: img, degree: '28/21' },
  { id: 2, day: 'Tuesday', img: img, degree: '28/21' },
  { id: 3, day: 'Wednesday', img: img, degree: '28/21' },
  { id: 4, day: 'Thursday', img: img, degree: '28/21' },
  { id: 5, day: 'Friday', img: img, degree: '28/21' },
  { id: 6, day: 'Saturday', img: img, degree: '28/21' },
  { id: 7, day: 'Sunday', img: img, degree: '28/21' },
]
const WeatherHubWeekForecast = () => {
  return (
    <div className={css.weatherHubWeekForecast}>
      <h2 className={css.weatherHubWeekForecast__title}>Week</h2>
      <ul className={css.weatherHubWeekForecast__list}>
        {weekforecast.map((d) => {
          return (
            <li key={d.id} className={css.weatherHubWeekForecast__item}>
              <p className={css.weatherHubWeekForecast__date}>{d.day}</p>
              <img src={d.img} alt="" />
              <p className={css.weatherHubWeekForecast__degr}>{d.degree}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WeatherHubWeekForecast
