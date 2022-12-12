import React from "react"
import HomePage from "./pages/HomePage"
import Summary from "./pages/Summary"
import Success from "./pages/Success"
import AfterLab from "./pages/AfterLab"
import {Route, Routes} from "react-router-dom"
import ChooseLab from "./pages/ChooseLab"

function App() {
  return (
    <div className="font-Roboto bg-background">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chooseLab" element={<ChooseLab />} />
        <Route path="/afterLab" element={<AfterLab />} />
        <Route path="/booking" element={<Summary />} />
        <Route path="/confirmed" element={<Success />} />
      </Routes>
    </div>
  )
}

export default App
