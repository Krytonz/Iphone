import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import BootAnimation from './components/BootAnimation'
import './index.css'

function App() {
  const [showBoot, setShowBoot] = useState(true)

  useEffect(() => {
    // Verificar se já viu a animação nesta sessão
    const hasSeenBoot = sessionStorage.getItem('hasSeenBoot')
    if (hasSeenBoot) {
      setShowBoot(false)
    }
  }, [])

  const handleBootComplete = () => {
    setShowBoot(false)
    sessionStorage.setItem('hasSeenBoot', 'true')
  }

  return (
    <>
      {showBoot && <BootAnimation onComplete={handleBootComplete} />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:slug" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
