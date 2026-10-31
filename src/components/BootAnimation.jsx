import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaApple } from 'react-icons/fa'

const BootAnimation = ({ isExiting, onComplete, onExitComplete }) => {
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    // Mostrar logo Apple
    const timer1 = setTimeout(() => {
      setShowProgress(true)
    }, 1000)

    // Iniciar a saída somente depois que a barra terminar.
    const timer2 = setTimeout(() => {
      onComplete()
    }, 3150)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={(definition) => {
        if (definition.opacity === 0) onExitComplete()
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
        {/* iPhone Frame */}
        <div className="relative">
          {/* iPhone Screen */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[300px] h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl"
          >
            {/* Notch */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-black rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden">
              {/* Apple Logo */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <FaApple className="text-white text-8xl" />
              </motion.div>

              {/* Progress Bar */}
              {showProgress && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute bottom-20 w-48"
                >
                  <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-20 text-center"
        >
          <p className="text-white text-xl font-bold">nossa loja</p>
          <p className="text-gray-400 text-sm">Zona Sul • Porto Velho</p>
        </motion.div>
      </motion.div>
  )
}

export default BootAnimation
