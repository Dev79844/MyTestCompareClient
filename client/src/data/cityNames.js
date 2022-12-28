import axios from "axios"

let cityNames = []

const getCityNames = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/lab")
    const data = response.data.data.require

    cityNames = [...new Set(data)].map((item) => ({value: item, label: item}))
  } catch (error) {
    console.log(error)
  }
}

await getCityNames()

console.log(cityNames)
export default cityNames
