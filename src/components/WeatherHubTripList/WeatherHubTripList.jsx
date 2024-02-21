import WeatherHubTripItem from '../WeatherHubTripItem/WeatherHubTripItem'
import css from './weatherHubTripList.module.scss'
import img from './../../images/brna.jpg'

const WeatherHubTripList = ({
  data,
  cardHandler,
  handlePrev,
  handleNext,
  startIndex,
  itemsPerPage,
  trips,
}) => {
  return (
    <div className={css.weatherHubTripList}>
      <div className={css.weatherHubTripList__wrapper}>
        <ul className={css.weatherHubTripList__list}>
          {data.map((v, ind) => {
            return (
              <WeatherHubTripItem
                key={ind}
                title={v.name}
                dates={v.dates}
                img={v.image}
                cardHandler={() => cardHandler(v.name, v.dates)}
              />
            )
          })}
        </ul>
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
      </div>

      <div className={css.addTrip}>
        <button
          type="button"
          className={css.addTrip__button}
          onClick={() => {
            console.log('click click')
          }}
        >
          <p className={css.addTrip__plus}>+</p>
          <p className={css.addTrip__text}>Add trip</p>
        </button>
      </div>
    </div>
  )
}

export default WeatherHubTripList
