import DailyPanel from '../DailyPanel'
import WeatherHub from '../WeatherHub'
import css from './board.module.scss'

const Board = () => {
  return (
    <div className={css.board}>
      <WeatherHub />
      <DailyPanel />
    </div>
  )
}

export default Board
