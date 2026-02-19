import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Mercado from './pages/Mercado'
import MainDesktop from './pages/MainDesktop'
import TestPage from './pages/TestPage'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/desktop' element={<MainDesktop/>}/>
          <Route path="/test" element={<TestPage />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/mercados/:mercadoId" element={<Mercado />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
