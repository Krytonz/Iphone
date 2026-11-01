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

const isLightBackground = (r, g, b) =>
  Math.min(r, g, b) > 222 && Math.max(r, g, b) - Math.min(r, g, b) < 28

const removeLightBackground = (src) =>
  new Promise((resolve) => {
    const image = new Image()
    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.naturalWidth
      canvas.height = image.naturalHeight
      const context = canvas.getContext('2d')

      if (!context) {
        resolve(src)
        return
      }

      context.drawImage(image, 0, 0)
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height)
      const { data, width, height } = pixels
      const visited = new Uint8Array(width * height)
      const queue = []

      const enqueue = (x, y) => {
        const index = y * width + x
        if (visited[index]) return
        const pixel = index * 4
        if (isLightBackground(data[pixel], data[pixel + 1], data[pixel + 2])) {
          visited[index] = 1
          queue.push(index)
        }
      }

      for (let x = 0; x < width; x += 1) {
        enqueue(x, 0)
        enqueue(x, height - 1)
      }
      for (let y = 1; y < height - 1; y += 1) {
        enqueue(0, y)
        enqueue(width - 1, y)
      }

      for (let cursor = 0; cursor < queue.length; cursor += 1) {
        const index = queue[cursor]
        const x = index % width
        const y = Math.floor(index / width)
        data[index * 4 + 3] = 0
        if (x > 0) enqueue(x - 1, y)
        if (x < width - 1) enqueue(x + 1, y)
        if (y > 0) enqueue(x, y - 1)
        if (y < height - 1) enqueue(x, y + 1)
      }

      context.putImageData(pixels, 0, 0)
      resolve(canvas.toDataURL('image/png'))
    }
    image.onerror = () => resolve(src)
    image.src = src
  })

const Hero = () => {
  const [processedImages, setProcessedImages] = useState([])
  const [imagesReady, setImagesReady] = useState(false)
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(max-width: 639px)').matches,
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 639px)')
    const handleViewportChange = (event) => setIsMobile(event.matches)
    mediaQuery.addEventListener?.('change', handleViewportChange)

    return () => mediaQuery.removeEventListener?.('change', handleViewportChange)
  }, [])

  useEffect(() => {
    let cancelled = false
    Promise.all(
      IPHONE_IMAGES.map(async (image) => ({
        ...image,
        src: await removeLightBackground(image.src),
      })),
    ).then((images) => {
      if (!cancelled) {
        setProcessedImages(images)
        setImagesReady(true)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="home" className="relative min-h-[820px] overflow-hidden bg-black pt-20 sm:min-h-[760px] lg:min-h-screen">
      {imagesReady && (
        <TiltedGridHero
          images={processedImages}
        speed={5}
        tileHeight={28}
        aspectRatio={9 / 16}
        gap={8}
        curve={75}
        fade={15}
        className="absolute inset-0 h-full w-full"
      >
        <div className="relative z-10 h-full px-6 text-center">
          {/* Reservamos a faixa central para o carrossel em telas estreitas. */}
          {isMobile && <div aria-hidden="true" className="h-[440px]" />}

          {/* Título acima do carrossel */}
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`absolute inset-x-0 mx-auto max-w-5xl px-4 ${isMobile ? 'top-[7%]' : 'top-[11%]'}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mb-5 inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-pix-green" />
              <span className="text-sm font-semibold text-white">Desde 2020</span>
            </motion.div>

            <h1 className="text-4xl font-extrabold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Seu Novo iPhone
              <br />
              <span className="bg-gradient-to-r from-apple-blue via-electric-blue to-cyan-400 bg-clip-text text-transparent">
                Te Aguarda Aqui
              </span>
            </h1>
          </motion.div>

          {/* Conteúdo, botões e confiança abaixo do carrossel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className={`absolute inset-x-0 mx-auto max-w-3xl px-4 ${isMobile ? 'bottom-[2%]' : 'bottom-[7%]'}`}
          >
            <p className="mb-2 text-lg font-semibold text-white sm:text-3xl md:text-4xl">na nossa loja</p>
            <p className="mx-auto mb-3 max-w-xl text-[11px] leading-snug text-gray-300 sm:mb-5 sm:text-base sm:leading-relaxed md:text-lg">
              Produtos Apple 100% originais com garantia. Seja o primeiro a ter os lançamentos com assistência técnica especializada.
            </p>

            <div className="mb-3 flex flex-col justify-center gap-2 sm:mb-5 sm:flex-row sm:gap-3">
              <a
                href="https://wa.me/seu-numero-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-apple-blue to-electric-blue px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl hover:shadow-apple-blue/50 sm:px-8 sm:py-3.5 sm:text-lg"
              >
                <FaWhatsapp size={22} />
                <span>Consultar no WhatsApp</span>
              </a>
              <button
                onClick={() => document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center space-x-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:px-8 sm:py-3.5 sm:text-lg"
              >
                <FaApple size={22} />
                <span>Ver Produtos</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] text-gray-400 sm:gap-4 sm:text-sm">
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
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-white">7.000+ Clientes</span>
              </div>
            </div>
          </motion.div>
        </div>
        </TiltedGridHero>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30 pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
