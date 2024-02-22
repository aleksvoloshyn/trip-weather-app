import { useState, useEffect } from 'react'
import DailyPanel from '../DailyPanel'
import WeatherHub from '../WeatherHub'
import { cityList } from './../../assets/cities'
import { getTodaysWeather, getForecast } from './../../services/getWeather'
import Modal from '../Modal/Modal'
import css from './board.module.scss'

const Board = () => {
  const [trips, setTrips] = useState(cityList)
  const [currentCity, setCurrentCity] = useState('Mumbai, India')
  const [currentCityShort, setCurrentCityShort] = useState('Mumbai')
  const [currentCityTemp, setCurrentCityTemp] = useState('')
  const [currentCityWeatherIcon, setCurrentCityWeatherIcon] = useState()
  const [tripStart, settripStart] = useState('')
  const [currentCityStart, setCurrentCityStart] = useState('')
  const [currentCityEnd, setCurrentCityEnd] = useState('')
  const [weatherForWeek, setWeatherForWeek] = useState([])

  const [isOpen, setIsOpen] = useState(false)
  const [tripData, setTripData] = useState(null)

  useEffect(() => {
    getTodaysWeather(currentCity).then((r) => {
      setCurrentCityTemp(r.days[0].temp)
      const iconName = r.days[0].icon
      const iconUrl = `./images/icons/${iconName}.svg`
      setCurrentCityWeatherIcon(iconUrl)
    })
  }, [currentCity])

  useEffect(() => {
    getForecast(currentCity, currentCityStart, currentCityEnd).then(
      (forecast) => {
        setWeatherForWeek(forecast)
      }
    )
  }, [currentCity, currentCityEnd, currentCityStart])

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

    const trimmedTripStart = dates.substring(0, 10).split('.').join('-')
    const trimmedDateStringStart = dates
      .substring(0, 10)
      .split('.')
      .reverse()
      .join('-')
    const trimmedDateStringEnd = dates.slice(-10).split('.').reverse().join('-')
    settripStart(trimmedTripStart)
    setCurrentCityStart(trimmedDateStringStart)
    setCurrentCityEnd(trimmedDateStringEnd)
    console.log(title)
    console.log(dates)
    // setCurrentCityShort(title.substring(0, location.indexOf(',')))
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleSave = (data) => {
    setTripData(data)
    // setTrips(trips.push(data))
    console.log(data)
  }

  return (
    <div className={css.board}>
      <Modal isOpen={isOpen} onClose={closeModal} onSave={handleSave} />
      <WeatherHub
        data={displayedCities}
        cardHandler={setCurrentCityInfo}
        handlePrev={handlePrev}
        handleNext={handleNext}
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        trips={trips}
        weekforecast={weatherForWeek}
        addCardHandler={() => {
          setIsOpen(true)
          console.log(1)
        }}
      ></WeatherHub>
      <DailyPanel
        degr={currentCityTemp}
        img={currentCityWeatherIcon}
        city={currentCity}
        futureDate={tripStart}
      />
    </div>
  )
}

export default Board
