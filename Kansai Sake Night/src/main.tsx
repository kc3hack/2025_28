import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Home.tsx'
import Map from './Map.tsx'
import Izakaya from './Izakaya.tsx'
import Test from './Test.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path='/Izakaya' element={<Izakaya />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  </StrictMode>,
)
