import css from './weatherHubSearch.module.css'

const WeatherHubSearch = () => {
  return (
    <div className={css.inputContainer}>
      <i className={css.searchIcon}></i>
      <input
        type="text"
        className={css.input}
        placeholder="Search for your trip"
      />
    </div>
  )
}

export default WeatherHubSearch
