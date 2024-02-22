import PropTypes from 'prop-types'
import Container from '../Container/Container'
import WeatherHubSearch from '../WeatherHubSearch/WeatherHubSearch'
import WeatherHubTripList from '../WeatherHubTripList'
import WeatherHubWeekForecast from '../WeatherHubWeekForecast'
import css from './weatherHub.module.scss'

const WeatherHub = ({
  data,
  cardHandler,
  handlePrev,
  handleNext,
  startIndex,
  itemsPerPage,
  trips,
  weekforecast,
  addCardHandler,
  onChangeHandler,
  filteredData,
}) => {
  return (
    <div className={css.weatherHub}>
      <Container>
        <h1 className={css.weatherHub__title}>
          Weather <strong>Forecast</strong>
        </h1>
        <WeatherHubSearch onChangeHandler={onChangeHandler} />
        <WeatherHubTripList
          data={data}
          cardHandler={(title, startDate, endDate) =>
            cardHandler(title, startDate, endDate)
          }
          handlePrev={handlePrev}
          handleNext={handleNext}
          startIndex={startIndex}
          itemsPerPage={itemsPerPage}
          trips={trips}
          addCardHandler={addCardHandler}
          filteredData={filteredData}
        />
        <WeatherHubWeekForecast weekforecast={weekforecast} />
      </Container>
    </div>
  )
}

WeatherHub.propTypes = {
  data: PropTypes.array,
  cardHandler: PropTypes.func,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  startIndex: PropTypes.number,
  itemsPerPage: PropTypes.number,
  trips: PropTypes.array,
  weekforecast: PropTypes.array,
  addCardHandler: PropTypes.func,
  onChangeHandler: PropTypes.func,
  filteredData: PropTypes.array,
}
export default WeatherHub
