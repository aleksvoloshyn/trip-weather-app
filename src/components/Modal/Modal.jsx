import { useState } from 'react'
import { popularCities } from '../../assets/cityList'
import css from './modal.module.scss'

const Modal = ({ isOpen, onClose, onSave }) => {
  const [city, setCity] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSave = () => {
    onSave({ city, startDate, endDate })
    onClose()
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value)
  }

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value)
  }

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
                  {/* <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Tokyo">Tokyo</option> */}
                  {/* Add more city options as needed */}
                </select>
              </div>
              <div className={css.form__group}>
                <label htmlFor="startDate">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={handleStartDateChange}
                  required
                />
              </div>
              <div className={css.form__group}>
                <label htmlFor="endDate">End Date:</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={handleEndDateChange}
                  required
                />
              </div>
            </div>
            <div className={css.modal__footer}>
              <button className={css.cancel__button} onClick={onClose}>
                Cancel
              </button>
              <button className={css.save__button} onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
