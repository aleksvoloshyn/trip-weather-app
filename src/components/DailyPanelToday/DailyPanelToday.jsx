import css from './dailyPanelToday.module.scss'

const DailyPanelToday = ({ day, degr, img, city }) => {
  return (
    <div className={css.dailyPanelToday}>
      <p className={css.dailyPanelToday__day}>{day}</p>
      <div className={css.dailyPanelToday__forecast}>
        <img
          className={css.dailyPanelToday__img}
          src={img}
          alt="weather icon"
        />
        <p className={css.dailyPanelToday__degr}>{degr}</p>
        <sup className={css.dailyPanelToday__sup}>&deg;C</sup>
      </div>
      <p className={css.dailyPanelToday__city}>{city}</p>
    </div>
  )
}

export default DailyPanelToday
