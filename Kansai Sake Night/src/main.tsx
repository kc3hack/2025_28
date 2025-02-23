import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './Home.tsx'
import Sake from './Sake.tsx'
import Map from './Map.tsx'
import Izakaya from './Izakaya.tsx'
import Test from './Test.tsx'
import SakeDetail from './SakeDetail.tsx';
import IzakayaDetail from './IzakayaDetail.tsx';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sake" element={<Sake />} />
        <Route path="/sake/:id" element={<SakeDetail />} />
        <Route path="/map" element={<Map />} />
        <Route path='/izakaya' element={<Izakaya />} />
        <Route path="/izakaya/:id" element={<IzakayaDetail />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  </StrictMode>,
)
