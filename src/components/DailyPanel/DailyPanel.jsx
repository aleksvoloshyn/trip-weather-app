import DailyPanelCountDown from '../DailyPanelCountDown'
import DailyPanelToday from '../DailyPanelToday'
import img from './../../images/w.jpg'
import css from './dailyPanel.module.scss'

const DailyPanel = () => {
  return (
    <div className={css.dailyPanel}>
      <DailyPanelToday
        day={'Monday'}
        img={img}
        degr={'24'}
        city={'Barselona'}
      />
      <DailyPanelCountDown days={30} hours={15} minutes={15} seconds={30} />
    </div>
  )
}

export default DailyPanel
