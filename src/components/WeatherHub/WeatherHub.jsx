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
  sortByDateHandlerDown,
  sortByDateHandlerUp,
}) => {
  return (
    <div className={css.weatherHub}>
      <Container>
        <h1 className={css.weatherHub__title}>
          Weather <strong>Forecast</strong>
        </h1>
        <span className={css.weatherHub__wrap}>
          {' '}
          <WeatherHubSearch onChangeHandler={onChangeHandler} />
          <div className={css.weatherHub__btns}>
            {' '}
            <button
              className={css.weatherHub__btndwn}
              onClick={sortByDateHandlerDown}
            >
              Sort ▼
            </button>
            <button
              className={css.weatherHub__btnup}
              onClick={sortByDateHandlerUp}
            >
              Sort ▲
            </button>
          </div>
        </span>

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
  sortByDateHandlerDown: PropTypes.func,
  sortByDateHandlerUp: PropTypes.func,
  filteredData: PropTypes.array,
}
export default WeatherHub
