import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useCallback, useState } from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import BootAnimation from './components/BootAnimation'
import './index.css'

function App() {
  const [showBoot, setShowBoot] = useState(() => {
    try {
      return !sessionStorage.getItem('hasSeenBoot')
    } catch {
      return true
    }
  })
  const [bootFinished, setBootFinished] = useState(!showBoot)

  const handleBootComplete = useCallback(() => {
    setBootFinished(true)
  }, [])

  const handleBootExitComplete = useCallback(() => {
    try {
      sessionStorage.setItem('hasSeenBoot', 'true')
    } catch {
      // A animação continua funcionando mesmo quando o storage está bloqueado.
    }
    setShowBoot(false)
  }, [])

  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:slug" element={<ProductDetail />} />
        </Routes>
      </Router>
      {showBoot && (
        <BootAnimation
          isExiting={bootFinished}
          onComplete={handleBootComplete}
          onExitComplete={handleBootExitComplete}
        />
      )}
    </>
  )
}

export default App
