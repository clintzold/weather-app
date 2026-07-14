// ./src/requestModule.js

export default (() => {
  const api_key = "BTSECRNRLCGYJQSJ4M29QC3Y7"
  const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

  async function retrieveWeather(location) {
    const date = new Date().toLocaleDateString('en-CA')
    
    try {

    const response = await fetch(baseURL + location + "/" + date + "?key=" + api_key)

    const data = await response.json()
    console.log(data)
    } catch (error) {
      console.error("There was an error retrieving weather data:", error)
    }
  }

  return { retrieveWeather }
})()
