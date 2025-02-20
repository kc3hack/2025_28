import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Map from './Map.js'
import Home from './Home.tsx'
import Sake from './sake.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/map" element={<Map />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Sake" element={<Sake />} />
      </Routes>
    </Router>
  </StrictMode>,
)
