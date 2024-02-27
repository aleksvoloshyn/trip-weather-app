import PropTypes from 'prop-types'
import css from './weatherHubTripItem.module.scss'

const WeatherHubTripItem = ({
  img,
  cityName,
  startDate,
  endDate,
  cardHandler,
}) => {
  return (
    <li
      className={css.weatherHubTripItemCard}
      onClick={() => {
        cardHandler(cityName, startDate, endDate)
      }}
    >
      <div className={css.weatherHubTripItemCard__top}>
        {img ? (
          <>
            {' '}
            <img
              src={`https://source.unsplash.com/featured/?${img}`}
              alt={img}
              className={css.weatherHubTripItemCard__image}
            />
            <div className={css.del}>X</div>
          </>
        ) : (
          'no image...'
        )}
      </div>
      <div className={css.weatherHubTripItemCard__bottom}>
        <h2 className={css.weatherHubTripItemCard__title}>
          {cityName.split(',')[0].trim()}
        </h2>
        <p className={css.weatherHubTripItemCard__text}>
          {startDate} - {endDate}
        </p>
      </div>
    </li>
  )
}

WeatherHubTripItem.propTypes = {
  img: PropTypes.string,
  cityName: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  cardHandler: PropTypes.func,
}
export default WeatherHubTripItem
