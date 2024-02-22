import Container from '../Container/Container'
import WeatherHubSearch from '../WeatherHubSearch/WeatherHubSearch'
import WeatherHubTripList from '../WeatherHubTripList'
import WeatherHubWeekForecast from '../WeatherHubWeekForecast'
import css from './weatherHub.module.scss'
import img from './../../images/brna.jpg'

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
}) => {
  return (
    <div className={css.weatherHub}>
      <Container>
        <h1 className={css.weatherHub__title}>
          Weather <strong>Forecast</strong>
        </h1>
        <WeatherHubSearch />
        <WeatherHubTripList
          data={data}
          cardHandler={(title, dates) => cardHandler(title, dates)}
          handlePrev={handlePrev}
          handleNext={handleNext}
          startIndex={startIndex}
          itemsPerPage={itemsPerPage}
          trips={trips}
          addCardHandler={addCardHandler}
        />
        <WeatherHubWeekForecast weekforecast={weekforecast} />
      </Container>
    </div>
  )
}

export default WeatherHub
