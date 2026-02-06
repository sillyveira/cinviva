import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Mercado from './pages/Mercado'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/mercados/:mercadoId" element={<Mercado />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
