import css from './weatherHubTripItem.module.scss'

const WeatherHubTripItem = ({ img, title, dates }) => {
  return (
    <li className={css.weatherHubTripItemCard}>
      <div className={css.weatherHubTripItemCard__top}>
        <img
          src={img}
          alt={img}
          className={css.weatherHubTripItemCard__image}
        />
      </div>
      <div className={css.weatherHubTripItemCard__bottom}>
        <h2 className={css.weatherHubTripItemCard__title}>{title}</h2>
        <p className={css.weatherHubTripItemCard__text}>{dates}</p>
      </div>
    </li>
  )
}

export default WeatherHubTripItem
