import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Home from './components/pages/Home'
import About from './components/pages/About'
import ProductsServices from './components/pages/ProductsServices'
import Contacts from './components/pages/Contacts'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductsServices" element={<ProductsServices />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
