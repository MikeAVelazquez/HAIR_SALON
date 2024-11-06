//import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Booking from './pages/Booking' 
import Staff from './pages/Staff'
import Services from './pages/Services'
import Admin from './pages/Admin'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path="staff" element={<Staff/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="booking" element={<Booking/>}/>
        <Route path="admin" element={<Admin/>}/>
      </Route>
    </Routes>
  </Router>  
)
