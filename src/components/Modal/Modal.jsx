import { useState } from 'react'
import { popularCities } from '../../assets/cityList'
import PropTypes from 'prop-types'
import css from './modal.module.scss'

const Modal = ({ isOpen, onClose, onSave }) => {
  const [city, setCity] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [error, setError] = useState('')

  const currentDate = new Date()
  const nextFifteenDays = new Date(
    currentDate.getTime() + 15 * 24 * 60 * 60 * 1000
  )
  const today = currentDate.toISOString().split('T')[0] // format for date input
  const maxDate = nextFifteenDays.toISOString().split('T')[0] // format for date input

  const handleSave = () => {
    onSave({ city, startDate, endDate })
    onClose()
    if (!startDate || !endDate || !city) {
      setError('Please fill in all fields.')
      console.log(error)
    } else {
      console.log('Submitted data:', { startDate, endDate, city })
    }

    // using localStorage
    let existingData = localStorage.getItem('myData')
    let parsedData = JSON.parse(existingData)

    if (parsedData === null) {
      parsedData = [{ startDate, endDate, city }]
    } else {
      parsedData.push({ startDate, endDate, city })
    }
    let updatedData = JSON.stringify(parsedData)
    localStorage.setItem('myData', updatedData)
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
    setError('')
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
    setError('')
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
    setError('')
  }

  const isSaveDisabled = !startDate || !endDate || !city

  return (
    <>
      {isOpen && (
        <div className={css.modal__background} onClick={onClose}>
          <div
            className={css.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={css.modal__header}>
              <h2>Create Trip</h2>
              <button className={css.close__button} onClick={onClose}>
                X
              </button>
            </div>
            <div className={css.modal__body}>
              <div className={css.form__group}>
                <label htmlFor="city">City:</label>
                <select
                  id="city"
                  value={city}
                  onChange={handleCityChange}
                  required
                >
                  <option value="">Please select a city</option>
                  {popularCities.map((item, ind) => {
                    return (
                      <option value={item} key={ind}>
                        {item}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className={css.form__group}>
                <label htmlFor="startDate">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={handleStartDateChange}
                  min={today}
                  max={maxDate}
                />
              </div>
              <div className={css.form__group}>
                <label htmlFor="endDate">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={handleEndDateChange}
                  min={today}
                  max={maxDate}
                />
              </div>
            </div>
            <div className={css.modal__footer}>
              <button className={css.cancel__button} onClick={onClose}>
                Cancel
              </button>
              <button
                className={css.save__button}
                onClick={handleSave}
                disabled={isSaveDisabled}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
}
export default Modal
