const testsFromExcel = []

fetch("http://localhost:3000/api/v1/getTests")
  .then((response) => response.json())
  .then((data) => {
    data.data.tests.map((item) => {
      testsFromExcel.push({value: item.name, label: item.name})
    })
  })
  .catch((err) => console.log(err))

// console.log(testsFromExcel)

export default testsFromExcel