import css from './weatherHubTripItem.module.scss'

const WeatherHubTripItem = ({
  img,
  title,
  startDate,
  endDate,
  cardHandler,
}) => {
  return (
    <li
      className={css.weatherHubTripItemCard}
      onClick={() => {
        console.log(endDate)
        console.log(11111111111)
        cardHandler(title, startDate, endDate)
      }}
    >
      <div className={css.weatherHubTripItemCard__top}>
        {(
          <img
            src={`https://source.unsplash.com/featured/?${img}`}
            alt={img}
            className={css.weatherHubTripItemCard__image}
          />
        ) || 'loading...'}
      </div>
      <div className={css.weatherHubTripItemCard__bottom}>
        <h2 className={css.weatherHubTripItemCard__title}>{title}</h2>
        <p className={css.weatherHubTripItemCard__text}>
          {startDate} - {endDate}
        </p>
      </div>
    </li>
  )
}

export default WeatherHubTripItem
