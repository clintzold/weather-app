// src/index.js
import "./styles.css"
import retrieveWeather from "./requestModule.js"
import WeatherReport from "./weatherReport.js"
import displayController from "./displayController.js"

const buttonContainer = document.getElementById("buttonContainer")

buttonContainer.addEventListener('click', handleClick )

function handleClick(event) {
  if (event.target.dataset.locationId) {
    const location = event.target.dataset.locationId

    retrieveWeather(location).then((result) => {
      const report = new WeatherReport(result)

      displayController.showReport(report)
    })

    console.log(event.target)
  }
}
retrieveWeather("rocky mountain house").then((result) => {
  const report = new WeatherReport(result)

  displayController.showReport(report)
})


