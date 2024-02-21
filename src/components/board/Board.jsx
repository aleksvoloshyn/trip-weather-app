import { useState, useEffect } from 'react'
import DailyPanel from '../DailyPanel'
import WeatherHub from '../WeatherHub'
import { cityList } from './../../assets/cities'
import css from './board.module.scss'

const Board = () => {
  const [trips, setTrips] = useState(cityList)
  const [currentCity, setCurrentCity] = useState('Mumbai, India')
  const [currentCityStart, setCurrentCityStart] = useState('')

  const [startIndex, setStartIndex] = useState(0)

  const itemsPerPage = 3

  useEffect(() => {
    const initialStartIndex = Math.max(0, trips.length - itemsPerPage)
    setStartIndex(initialStartIndex)
  }, [trips])

  const displayedCities = trips.slice(startIndex, startIndex + itemsPerPage)

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1)
      console.log('prev')
    }
  }

  const handleNext = () => {
    if (startIndex + itemsPerPage < trips.length) {
      setStartIndex((prevIndex) => prevIndex + 1)
    }
  }

  const setCurrentCityInfo = (title, dates) => {
    setCurrentCity(title)
    const trimmedDateString = dates.substring(0, 10)
    setCurrentCityStart(trimmedDateString)
    console.log(title)
    console.log(dates)
  }

  return (
    <div className={css.board}>
      <WeatherHub
        data={displayedCities}
        cardHandler={setCurrentCityInfo}
        handlePrev={handlePrev}
        handleNext={handleNext}
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        trips={trips}
      ></WeatherHub>
      <DailyPanel />
    </div>
  )
}

export default Board
