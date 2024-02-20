import css from './dailyPanelCountDown.module.scss'

const DailyPanelCountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={css.dailyPanelCountDown}>
      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}> {days} </p>
        <p className={css.dailyPanelCountDown__text}> DAYS</p>
      </div>

      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}> {hours} </p>
        <p className={css.dailyPanelCountDown__text}> HOURS</p>
      </div>

      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}> {minutes} </p>
        <p className={css.dailyPanelCountDown__text}> MINUTES</p>
      </div>

      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}> {minutes} </p>
        <p className={css.dailyPanelCountDown__text}> SECONDS</p>
      </div>
    </div>
  )
}

export default DailyPanelCountDown
