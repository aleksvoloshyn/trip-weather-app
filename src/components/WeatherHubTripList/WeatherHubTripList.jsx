import WeatherHubTripItem from '../WeatherHubTripItem/WeatherHubTripItem'
import css from './weatherHubTripList.module.scss'
import img from './../../images/brna.jpg'

const data = [
  { id: 1, title: 'London', dates: '01.01.2024 - 14.01.2024' },
  { id: 2, title: 'Barselona', dates: '01.01.2024 - 14.01.2024', img: img },
  { id: 3, title: 'Kyiv', dates: '01.01.2024 - 14.01.2024' },
  // { id: 4, title: 'Kyiv', dates: '01.01.2024 - 14.01.2024' },
  // { id: 5, title: 'Kyiv', dates: '01.01.2024 - 14.01.2024' },
]

const WeatherHubTripList = () => {
  return (
    <div className={css.weatherHubTripList}>
      <div className={css.weatherHubTripList__wrapper}>
        <ul className={css.weatherHubTripList__list}>
          {data.map((v) => {
            return (
              <WeatherHubTripItem
                key={v.id}
                title={v.title}
                dates={v.dates}
                img={v.img}
              />
            )
          })}
        </ul>
        <div className={css.buttons}>
          <button className={css.prevbtn}>&#8592;</button>
          <button className={css.nextbtn}>&#8594; </button>
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
