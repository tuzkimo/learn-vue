const descTime = time => {
  let timePeriod = new Date() - new Date(time)
  let yearPeriod = timePeriod / (365 * 24 * 3600 * 1000)
  let monthPeriod = timePeriod / (30 * 24 * 3600 * 1000)
  let dayPeriod = timePeriod / (24 * 3600 * 1000)
  let hourPeriod = timePeriod / (3600 * 1000)
  let minutePeriod = timePeriod / (60 * 1000)

  if (yearPeriod >= 1) {
    return `${Math.trunc(yearPeriod)} years age`
  } else if (monthPeriod >= 1) {
    return `${Math.trunc(monthPeriod)} months age`
  } else if (dayPeriod >= 1) {
    return `${Math.trunc(dayPeriod)} days age`
  } else if (hourPeriod >= 1) {
    return `${Math.trunc(hourPeriod)} hours age`
  } else if (minutePeriod >= 1) {
    return `${Math.trunc(minutePeriod)} minutes age`
  } else {
    return `just a moment`
  }
}

export default {
  descTime
}
