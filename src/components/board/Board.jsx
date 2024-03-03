import { useState, useEffect } from 'react'
import DailyPanel from '../DailyPanel'
import WeatherHub from '../WeatherHub'
import { mockTripList } from '../../assets/tripList'
import { getTodaysWeather, getForecast } from '../../services/getWeather'
import Modal from '../Modal/Modal'
import Signin from '../SignIn/Signin'
import css from './board.module.scss'

const Board = () => {
  const [trips, setTrips] = useState([])
  const [filteredTrips, setFilteredTrips] = useState([])
  const [currentCity, setCurrentCity] = useState('Kyiv, UA')
  const [currentCityTemp, setCurrentCityTemp] = useState('')
  const [currentCityWeatherIcon, setCurrentCityWeatherIcon] = useState()
  const [tripStart, setTripStart] = useState('')
  const [currentCityStart, setCurrentCityStart] = useState('')
  const [currentCityEnd, setCurrentCityEnd] = useState('')
  const [weatherForWeek, setWeatherForWeek] = useState([])
  const [modalIsOpened, setModalIsOpened] = useState(false)

  //getting data from local storage, if null => []
  useEffect(() => {
    const existingTripList = JSON.parse(localStorage.getItem('myData'))
    if (existingTripList === null) {
      setTrips(mockTripList)
      setFilteredTrips(mockTripList)
    } else {
      setTrips([...existingTripList, ...mockTripList])
      setFilteredTrips([...existingTripList, ...mockTripList])
    }
  }, [])

  // getting weather forecast for today fo select trip-item
  useEffect(() => {
    getTodaysWeather(currentCity).then((r) => {
      setCurrentCityTemp(r.days[0].temp)
      const iconName = r.days[0].icon
      const iconUrl = `./images/icons/${iconName}.svg`
      setCurrentCityWeatherIcon(iconUrl)
    })
  }, [currentCity])

  // getting weather forecast starting from trip-start date for week or for the end of the trip
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

  // save trip to the list from the modal window
  const handleSave = (data) => {
    setTrips((prevTrips) => [...prevTrips, data])
    setFilteredTrips((prevTrips) => [...prevTrips, data])
  }

  // scrolling list next button
  const handleNext =
    (startIndex, itemsPerPage, setStartIndex, totalTripsLength) => () => {
      const newStartIndex = Math.min(
        startIndex + itemsPerPage,
        totalTripsLength - itemsPerPage
      )
      setStartIndex(newStartIndex)
    }

  // scrolling list previous button
  const handlePrev = (startIndex, setStartIndex) => () => {
    const newStartIndex = Math.max(0, startIndex - itemsPerPage)
    setStartIndex(newStartIndex)
  }

  // search trip handler by typing city name
  const onChangeHandler = (text) => {
    let filtered = trips.filter((item) =>
      item.city.split(',')[0].trim().toLowerCase().includes(text.toLowerCase())
    )
    setFilteredTrips(filtered)
  }

  // sort by trip start date handler down
  const sortByDateHandlerDown = () => {
    const sortedTripList = [...filteredTrips].sort((a, b) => {
      return new Date(a.startDate) - new Date(b.startDate)
    })
    setFilteredTrips(sortedTripList)
  }

  // sort by trip start date handler up
  const sortByDateHandlerUp = () => {
    const sortedTripList = [...filteredTrips].sort((a, b) => {
      return new Date(b.startDate) - new Date(a.startDate)
    })
    setFilteredTrips(sortedTripList)
  }

  return (
    <div className={css.board}>
      <Modal isOpen={modalIsOpened} onClose={closeModal} onSave={handleSave} />
      <Signin></Signin>
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
        sortByDateHandlerDown={sortByDateHandlerDown}
        sortByDateHandlerUp={sortByDateHandlerUp}
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
