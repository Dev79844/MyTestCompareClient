import React from "react"
import HomePage from "./pages/HomePage"
import Summary from "./pages/Summary"
import Success from "./pages/Success"
import {Route, Routes} from "react-router-dom"
import ChooseLab from "./pages/ChooseLab"
import SelectedTests from "./pages/SelectedTests"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chooseLab" element={<ChooseLab />} />
        <Route path="/afterLab" element={<SelectedTests />} />
        <Route path="/booking" element={<Summary />} />
        <Route path="/confirmed" element={<Success />} />
      </Routes>
    </div>
  )
}

export default App
