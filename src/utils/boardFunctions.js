// navigate buttons handlers (go 1 step back and 1 step forward)
export const handlePrev = (startIndex, setStartIndex) => {
  if (startIndex > 0) {
    setStartIndex((prevIndex) => prevIndex - 1)
    console.log('prev')
  }
}

export const handleNext = (startIndex, itemsPerPage, trips, setStartIndex) => {
  if (startIndex + itemsPerPage < trips.length) {
    setStartIndex((prevIndex) => prevIndex + 1)
  }
}
// ********
