import PropTypes from 'prop-types'
import { useState } from 'react'
import css from './weatherHubSearch.module.css'

const WeatherHubSearch = ({ onChangeHandler }) => {
  const [value, setValue] = useState('')
  return (
    <div className={css.inputContainer}>
      <i className={css.searchIcon}></i>
      <input
        type="text"
        className={css.input}
        placeholder="Search for your trip"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          onChangeHandler(e.target.value)
        }}
      />
    </div>
  )
}
WeatherHubSearch.propTypes = {
  onChangeHandler: PropTypes.func,
}
export default WeatherHubSearch
