import Container from '../Container/Container'
import WeatherHubSearch from '../WeatherHubSearch/WeatherHubSearch'
import WeatherHubTripList from '../WeatherHubTripList'
import WeatherHubWeekForecast from '../WeatherHubWeekForecast'
import css from './weatherHub.module.scss'

const WeatherHub = () => {
  return (
    <div className={css.weatherHub}>
      <Container>
        <h1 className={css.weatherHub__title}>
          Weather <strong>Forecast</strong>
        </h1>
        <WeatherHubSearch />
        <WeatherHubTripList />
        <WeatherHubWeekForecast />
      </Container>
    </div>
  )
}

export default WeatherHub
