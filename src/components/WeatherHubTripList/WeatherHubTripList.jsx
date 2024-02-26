import PropTypes from 'prop-types'
import WeatherHubTripItem from '../WeatherHubTripItem/WeatherHubTripItem'
import css from './weatherHubTripList.module.scss'

const WeatherHubTripList = ({
  data,
  cardHandler,
  handlePrev,
  handleNext,
  startIndex,
  itemsPerPage,
  trips,
  addCardHandler,
  filteredData,
}) => {
  return (
    <div className={css.weatherHubTripList}>
      <div className={css.weatherHubTripList__wrapper}>
        {data.length > 0 ? (
          <ul className={css.weatherHubTripList__list}>
            {data.map((v, ind) => {
              return (
                <WeatherHubTripItem
                  key={ind}
                  cityName={v.city}
                  startDate={v.startDate.split('-').reverse().join('.')}
                  endDate={v.endDate.split('-').reverse().join('.')}
                  img={v.city}
                  cardHandler={() => {
                    cardHandler(v.city, v.startDate, v.endDate)
                  }}
                />
              )
            })}
          </ul>
        ) : (
          <p className={css.mess}>You have no planned trips </p>
        )}

        {filteredData.length > 2 && (
          <div className={css.buttons}>
            <button
              className={css.prevbtn}
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              &#8592;
            </button>
            <button
              className={css.nextbtn}
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= trips.length}
            >
              &#8594;
            </button>
          </div>
        )}
      </div>

      <div className={css.addTrip}>
        <button
          type="button"
          className={css.addTrip__button}
          onClick={addCardHandler}
        >
          <p className={css.addTrip__plus}>+</p>
          <p className={css.addTrip__text}>Add trip</p>
        </button>
      </div>
    </div>
  )
}

WeatherHubTripList.propTypes = {
  data: PropTypes.array,
  cardHandler: PropTypes.func,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  startIndex: PropTypes.number,
  itemsPerPage: PropTypes.number,
  trips: PropTypes.array,
  filteredData: PropTypes.array,
  addCardHandler: PropTypes.func,
}
export default WeatherHubTripList
