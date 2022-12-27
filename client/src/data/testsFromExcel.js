const testsFromExcel = new Map()

async function populateTestsFromExcel() {
  try {
    const response = await fetch("http://localhost:3000/api/v1/getTests")
    const data = await response.json()
    data.data.tests.map((item) => {
      delete item._id
      delete item.__v
      delete item.price
      testsFromExcel.set(item.name, item)
    })
  } catch (err) {
    console.log(err)
  }
}

await populateTestsFromExcel()

export default testsFromExcel
