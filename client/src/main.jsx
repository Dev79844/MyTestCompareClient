import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import HomePage from './pages/HomePage'
import ChooseLab from "./pages/ChooseLab"
import SelectedTests from './pages/SelectedTests'
import Summary from './pages/Summary'
import Success from './pages/Success'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path:"/chooseLab",
    element:<ChooseLab />
  },
  {
    path:"/afterLab",
    element:<SelectedTests />
  },
  {
    path:"/booking",
    element:<Summary />
  },
  {
    path: "/confirmed",
    element: <Success />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
