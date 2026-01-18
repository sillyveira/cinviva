import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Mercado from './pages/Mercado'

function App() {
  return (
    <BrowserRouter>
      <div className="app-nav">
        <nav>
          <Link to="/">Home</Link>
          <span style={{ margin: '0 8px' }}>|</span>
          <Link to="/mercado">Mercado</Link>
        </nav>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mercado" element={<Mercado />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
