import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Mercado from './pages/Mercado'
import TestPage from './pages/TestPage'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/mercados/:mercadoId" element={<Mercado />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
