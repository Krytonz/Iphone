import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaWhatsapp, FaApple } from 'react-icons/fa'
import { TiltedGridHero } from './ui/tilted-grid-hero'

// Referências fornecidas pelo cliente: iPhone 18 Pro Max em três acabamentos.
const assetUrl = (fileName) => `${import.meta.env.BASE_URL}${fileName}`

const IPHONE_IMAGES = [
  { src: assetUrl('iphone-white.jpg'), alt: 'iPhone 18 Pro Max branco, frente e traseira' },
  { src: assetUrl('iphone-blue.jpg'), alt: 'iPhone 18 Pro Max azul, frente e traseira' },
  { src: assetUrl('iphone-black.jpg'), alt: 'iPhone 18 Pro Max preto, frente e traseira' },
]

const Hero = () => {
  const [viewport, setViewport] = useState(() => ({
    width: typeof window === 'undefined' ? 1024 : window.innerWidth,
    height: typeof window === 'undefined' ? 800 : window.innerHeight,
  }))

  useEffect(() => {
    let frame
    const updateViewport = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setViewport({ width: window.innerWidth, height: window.innerHeight })
      })
    }

    window.addEventListener('resize', updateViewport, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', updateViewport)
    }
  }, [])

  const isMobile = viewport.width < 640
  const isCompact = isMobile || viewport.width < 900 || viewport.height < 760

  return (
    <section
      id="home"
      className="relative min-h-[clamp(650px,100svh,760px)] overflow-hidden bg-black pt-16 sm:min-h-[clamp(680px,100svh,860px)] sm:pt-20 lg:min-h-[min(900px,100svh)]"
    >
      <TiltedGridHero
        images={IPHONE_IMAGES}
        speed={isCompact ? 5.5 : 5}
        tileHeight={isMobile ? 22 : isCompact ? 24 : 28}
        aspectRatio={736 / 1104}
        gap={8}
        axis={isMobile ? 50 : 52}
        curve={75}
        fade={18}
        className="absolute inset-0 h-full w-full"
        visualClassName={isMobile ? 'top-[clamp(9rem,25%,12rem)] bottom-[clamp(11rem,28%,14rem)]' : isCompact ? 'top-[clamp(9rem,23%,11.5rem)] bottom-[clamp(10rem,25%,13rem)]' : 'top-[clamp(10rem,24%,14rem)] bottom-[clamp(11rem,25%,15rem)]'}
      >

        <div className="absolute inset-0 z-10 flex flex-col items-center px-4 text-center sm:px-6">
          {/* O título ocupa seu próprio espaço e nunca é posicionado sobre o conteúdo inferior. */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-5xl shrink-0 pt-[clamp(1.5rem,5vh,3rem)]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md sm:mb-5 sm:px-4 sm:py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-pix-green" />
              <span className="text-xs font-semibold text-white sm:text-sm">Desde 2020</span>
            </motion.div>

            <h1 className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1.02] text-white">
              Seu Novo iPhone
              <br />
              <span className="bg-gradient-to-r from-apple-blue via-electric-blue to-cyan-400 bg-clip-text text-transparent">
                Te Aguarda Aqui
              </span>
            </h1>
          </motion.div>

          {/* Espaço flexível para o carrossel: cresce em telas maiores e encolhe em janelas baixas. */}
          <div className="min-h-0 flex-1" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-3xl shrink-0 pb-[clamp(1.25rem,4vh,3.5rem)]"
          >
            <p className="mb-1 text-[clamp(1.15rem,3vw,2.25rem)] font-semibold text-white sm:mb-2">na nossa loja</p>
            <p className="mx-auto mb-3 max-w-xl text-[clamp(0.7rem,1.5vw,1.125rem)] leading-snug text-gray-300 sm:mb-5 sm:leading-relaxed">
              Produtos Apple 100% originais com garantia. Seja o primeiro a ter os lançamentos com assistência técnica especializada.
            </p>

            <div className="mb-3 flex flex-col justify-center gap-2 sm:mb-5 sm:flex-row sm:gap-3">
              <a
                href="https://wa.me/seu-numero-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-apple-blue to-electric-blue px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-apple-blue/50 sm:px-8 sm:py-3.5 sm:text-lg"
              >
                <FaWhatsapp size={22} />
                <span>Consultar no WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex min-h-11 items-center justify-center space-x-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-lg"
              >
                <FaApple size={22} />
                <span>Ver Produtos</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1 text-[clamp(0.6rem,1.1vw,0.875rem)] text-gray-400 sm:gap-4">
              <div className="flex items-center space-x-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-sm sm:space-x-2 sm:px-4 sm:py-2">
                <svg className="h-3 w-3 shrink-0 text-pix-green sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">100% Original</span>
              </div>
              <div className="flex items-center space-x-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-sm sm:space-x-2 sm:px-4 sm:py-2">
                <svg className="h-3 w-3 shrink-0 text-pix-green sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">Garantia Apple</span>
              </div>
              <div className="flex items-center space-x-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-sm sm:space-x-2 sm:px-4 sm:py-2">
                <svg className="h-3 w-3 shrink-0 text-pix-green sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">7.000+ Clientes</span>
              </div>
            </div>
          </motion.div>
        </div>
      </TiltedGridHero>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 left-1/2 z-20 hidden -translate-x-1/2 sm:block sm:bottom-6"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-8 w-5 justify-center rounded-full border-2 border-white/30 pt-1.5 sm:h-10 sm:w-6 sm:pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
