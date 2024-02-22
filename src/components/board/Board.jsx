import { useState, useEffect } from 'react'
import DailyPanel from '../DailyPanel'
import WeatherHub from '../WeatherHub'
import { tripList } from './../../assets/tripList'
import { getTodaysWeather, getForecast } from './../../services/getWeather'
import Modal from '../Modal/Modal'
import css from './board.module.scss'

const Board = () => {
  const [trips, setTrips] = useState(tripList)
  const [filteredTrips, setFilteredTrips] = useState(tripList)

  const [currentCity, setCurrentCity] = useState('Kyiv, UA')
  const [currentCityTemp, setCurrentCityTemp] = useState('')
  const [currentCityWeatherIcon, setCurrentCityWeatherIcon] = useState()
  const [tripStart, setTripStart] = useState('')
  const [currentCityStart, setCurrentCityStart] = useState('')
  const [currentCityEnd, setCurrentCityEnd] = useState('')
  const [weatherForWeek, setWeatherForWeek] = useState([])
  const [modalIsOpened, setModalIsOpened] = useState(false)

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
    const initialStartIndex = Math.max(0, filteredTrips.length - itemsPerPage)
    setStartIndex(initialStartIndex)
  }, [filteredTrips, trips])

  const displayedCities = filteredTrips.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  // set selected trip info to state
  const setCurrentCityInfo = (title, startDate, endDate) => {
    setCurrentCity(title)
    setTripStart(startDate)
    setCurrentCityStart(startDate)
    setCurrentCityEnd(endDate)
  }

  const closeModal = () => {
    setModalIsOpened(false)
  }

  const handleSave = (data) => {
    setTrips((prevTrips) => [...prevTrips, data])
    setFilteredTrips((prevTrips) => [...prevTrips, data])
  }

  const handleNext =
    (startIndex, itemsPerPage, setStartIndex, totalTripsLength) => () => {
      const newStartIndex = Math.min(
        startIndex + itemsPerPage,
        totalTripsLength - itemsPerPage
      )
      setStartIndex(newStartIndex)
    }

  const handlePrev = (startIndex, setStartIndex) => () => {
    const newStartIndex = Math.max(0, startIndex - itemsPerPage)
    setStartIndex(newStartIndex)
  }

  const onChangeHandler = (text) => {
    let filtered = trips.filter((item) =>
      item.city.split(',')[0].trim().toLowerCase().includes(text.toLowerCase())
    )
    setFilteredTrips(filtered)
  }

  return (
    <div className={css.board}>
      <Modal isOpen={modalIsOpened} onClose={closeModal} onSave={handleSave} />
      <WeatherHub
        data={displayedCities}
        cardHandler={setCurrentCityInfo}
        handlePrev={handlePrev(startIndex, setStartIndex)}
        handleNext={handleNext(
          startIndex,
          itemsPerPage,
          setStartIndex,
          trips.length
        )}
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        trips={trips}
        weekforecast={weatherForWeek}
        filteredData={filteredTrips}
        addCardHandler={() => {
          setModalIsOpened(true)
        }}
        onChangeHandler={onChangeHandler}
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
