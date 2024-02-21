import DailyPanelCountDown from '../DailyPanelCountDown'
import DailyPanelToday from '../DailyPanelToday'
// import img from './../../images/w.jpg'
import css from './dailyPanel.module.scss'

const DailyPanel = ({ img, degr, city, days, hours, minutes, seconds }) => {
  // get current day for weather forecast
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const currentDate = new Date()
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()]
  console.log(currentDayOfWeek)

  return (
    <div className={css.dailyPanel}>
      <DailyPanelToday
        day={currentDayOfWeek}
        img={img}
        degr={degr}
        city={city}
      />
      <DailyPanelCountDown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  )
}

export default DailyPanel
