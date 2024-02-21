import { useState, useEffect } from 'react'
import DailyPanel from '../DailyPanel'
import WeatherHub from '../WeatherHub'
import { cityList } from './../../assets/cities'
import { getTodaysWeather } from './../../services/getWeather'
import css from './board.module.scss'

const Board = () => {
  const [trips, setTrips] = useState(cityList)
  const [currentCity, setCurrentCity] = useState('Mumbai, India')
  const [currentCityShort, setCurrentCityShort] = useState('Mumbai')
  const [currentCityTemp, setCurrentCityTemp] = useState('')
  const [currentCityWeatherIcon, setCurrentCityWeatherIcon] = useState()
  const [currentCityStart, setCurrentCityStart] = useState('')

  useEffect(() => {
    getTodaysWeather(currentCity).then((r) => {
      setCurrentCityTemp(r.days[0].temp)
      console.log(r)
      const iconName = r.days[0].icon
      console.log(iconName)
      const iconUrl = `./images/icons/${iconName}.svg`
      setCurrentCityWeatherIcon(iconUrl)
    })
  }, [currentCity])

  //display the last 3 added trips:
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 3

  useEffect(() => {
    const initialStartIndex = Math.max(0, trips.length - itemsPerPage)
    setStartIndex(initialStartIndex)
  }, [trips])

  const displayedCities = trips.slice(startIndex, startIndex + itemsPerPage)

  // previous button handler (go 1 step back)
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1)
      console.log('prev')
    }
  }
  // next button handler (go 1 step forward)
  const handleNext = () => {
    if (startIndex + itemsPerPage < trips.length) {
      setStartIndex((prevIndex) => prevIndex + 1)
    }
  }

  // set selected trip info to state
  const setCurrentCityInfo = (title, dates) => {
    setCurrentCity(title)
    const trimmedDateString = dates.substring(0, 10)
    setCurrentCityStart(trimmedDateString)
    console.log(title)
    console.log(dates)
    // setCurrentCityShort(title.substring(0, location.indexOf(',')))
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
      <DailyPanel
        degr={currentCityTemp}
        img={currentCityWeatherIcon}
        city={currentCity}
        futureDate={currentCityStart}
        // days={1}
        // hours={2}
        // minutes={3}
        // seconds={4}
      />
    </div>
  )
}

export default Board
