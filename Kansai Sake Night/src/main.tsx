import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import Map from './Map.tsx'
import Test from './Test.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/map" element={<Map />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  </StrictMode>,
)
