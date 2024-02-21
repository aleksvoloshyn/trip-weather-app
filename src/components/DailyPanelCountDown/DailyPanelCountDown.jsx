import css from './dailyPanelCountDown.module.scss'

import { useState, useEffect } from 'react'

const DailyPanelCountDown = ({ futureDate }) => {
  const calculateTimeLeft = () => {
    const futureDateArray = futureDate.split('-').map(Number)
    const futureDateObj = new Date(
      futureDateArray[2],
      futureDateArray[1] - 1,
      futureDateArray[0]
    )

    const difference = futureDateObj.getTime() - new Date().getTime()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <div className={css.dailyPanelCountDown}>
      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}>
          {timeLeft.days || '0'}
        </p>
        <p className={css.dailyPanelCountDown__text}>DAYS</p>
      </div>

      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}>
          {timeLeft.hours || '0'}
        </p>
        <p className={css.dailyPanelCountDown__text}>HOURS</p>
      </div>

      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}>
          {timeLeft.minutes || '0'}
        </p>
        <p className={css.dailyPanelCountDown__text}>MINUTES</p>
      </div>

      <div className={css.dailyPanelCountDown__wrap}>
        <p className={css.dailyPanelCountDown__quantity}>
          {timeLeft.seconds || '0'}
        </p>
        <p className={css.dailyPanelCountDown__text}>SECONDS</p>
      </div>
    </div>
  )
}

export default DailyPanelCountDown
