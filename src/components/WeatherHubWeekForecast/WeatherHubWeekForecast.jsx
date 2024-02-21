import img from './../../images/w.jpg'
import css from './weatherHubWeekForecast.module.scss'

const WeatherHubWeekForecast = ({ weekforecast }) => {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return (
    <div className={css.weatherHubWeekForecast}>
      <h2 className={css.weatherHubWeekForecast__title}>Week</h2>
      <ul className={css.weatherHubWeekForecast__list}>
        {/* take first seven day from trip */}
        {weekforecast ? (
          weekforecast.slice(0, 7).map((d, ind) => {
            const date = new Date(d.datetime)
            const dayOfWeek = date.getDay()
            daysOfWeek[dayOfWeek]
            return (
              <li key={ind} className={css.weatherHubWeekForecast__item}>
                <p className={css.weatherHubWeekForecast__date}>
                  {daysOfWeek[dayOfWeek]}
                </p>
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
                  /
                  <p className={css.weatherHubWeekForecast__degr}>
                    {d.tempmax}&deg;
                  </p>
                </span>
              </li>
            )
          })
        ) : (
          <div>loading...</div>
        )}
      </ul>
    </div>
  )
}

export default WeatherHubWeekForecast
