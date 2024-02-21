import img from './../../images/w.jpg'
import css from './weatherHubWeekForecast.module.scss'
// const weekforecast = [
//   { id: 1, day: 'Monday', img: img, degree: '28/21' },
//   { id: 2, day: 'Tuesday', img: img, degree: '28/21' },
//   { id: 3, day: 'Wednesday', img: img, degree: '28/21' },
//   { id: 4, day: 'Thursday', img: img, degree: '28/21' },
//   { id: 5, day: 'Friday', img: img, degree: '28/21' },
//   { id: 6, day: 'Saturday', img: img, degree: '28/21' },
//   { id: 7, day: 'Sunday', img: img, degree: '28/21' },
// ]
const WeatherHubWeekForecast = ({ weekforecast }) => {
  return (
    <div className={css.weatherHubWeekForecast}>
      <h2 className={css.weatherHubWeekForecast__title}>Week</h2>
      <ul className={css.weatherHubWeekForecast__list}>
        {/* take first seven day from trip */}
        {weekforecast.slice(0, 7).map((d, ind) => {
          return (
            <li key={ind} className={css.weatherHubWeekForecast__item}>
              <p className={css.weatherHubWeekForecast__date}>{d.datetime}</p>
              <img
                src={`./images/icons/${d.icon}.svg`}
                alt={d.icon}
                className={css.weatherHubWeekForecast__icon}
              />
              <span className={css.weatherHubWeekForecast__maxmin}>
                {' '}
                <p className={css.weatherHubWeekForecast__degr}>
                  {d.tempmin}&deg;
                </p>
                /<p className={css.weatherHubWeekForecast__degr}>{d.tempmax}</p>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default WeatherHubWeekForecast
