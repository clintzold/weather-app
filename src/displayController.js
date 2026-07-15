// ./src/displayController.js
export default (() => {
  const reportContainer = document.getElementById("report")
  const hourlyContainer = document.getElementById("hourly")

  function showReport(report) {
    reportContainer.innerHTML = `
      <h3>${report.location}</h3>
      <h2>${report.description}</h2>
      <div class="weatherDataContainer">
        <h4>${report.temp}&deg;C</h4>
        <h4>Wind: ${report.windspeed} km/h</h4>
      </div>
    `
  }

  return { showReport }
})()
