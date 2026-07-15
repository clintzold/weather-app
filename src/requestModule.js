// ./src/requestModule.js

const api_key = "BTSECRNRLCGYJQSJ4M29QC3Y7"
const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

export default async function retrieveWeather(location) {
  const date = new Date().toLocaleDateString('en-CA')
  
  try {

    const response = await fetch(baseURL + location + "/" + date + "?key=" + api_key)
    const data = await response.json()

    return data

  } catch (error) {

    console.error("There was an error retrieving weather data:", error)

  }
}

