import css from './dailyPanelToday.module.scss'

const DailyPanelToday = ({ day, degr, img, city }) => {
  return (
    <div className={css.dailyPanelToday}>
      <p className={css.dailyPanelToday__day}>{day}</p>
      <div className={css.dailyPanelToday__forecast}>
        <img className={css.dailyPanelToday__img} src={img} alt="img" />
        <p className={css.dailyPanelToday__degr}>{degr} </p>
      </div>
      <p className={css.dailyPanelToday__city}>{city}</p>
    </div>
  )
}

export default DailyPanelToday
