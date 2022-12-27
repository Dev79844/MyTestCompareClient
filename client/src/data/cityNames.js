const cityNames = []

var headers = new Headers()
headers.append(
  "X-CSCAPI-KEY",
  "Y0NYVG9tNVlBck5iSXAxVENMeDFyTDRhMGduMUUzTWc5cjY3TGZDSQ=="
)

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
}

fetch("https://api.countrystatecity.in/v1/countries/IN/cities", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    result.map((item) => {
      cityNames.push({value: item.name, label: item.name})
    })
  })
  .catch((error) => console.log("error", error))

export default cityNames
