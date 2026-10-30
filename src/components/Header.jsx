import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  ['Home', 'home'],
  ['Produtos', 'produtos'],
  ['Reparos', 'reparos'],
  ['Diferenciais', 'diferenciais'],
  ['Sobre', 'sobre'],
  ['Contato', 'contato'],
]

const bubbleClass = 'rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white backdrop-blur-md transition-all hover:border-apple-blue/40 hover:bg-white/10 hover:text-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/60'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 shadow-lg shadow-apple-blue/5 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Abreviação da marca */}
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            aria-label="Ir para o início"
            className="flex shrink-0 items-center rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue/60"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-apple-blue to-electric-blue">
              <span className="text-xl font-bold text-white">iP</span>
            </div>
          </button>

          {/* Desktop navigation bubbles */}
          <nav className="hidden items-center gap-2 lg:flex" aria-label="Navegação principal">
            {navItems.map(([label, id]) => (
              <button key={id} type="button" onClick={() => scrollToSection(id)} className={bubbleClass}>
                {label}
              </button>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://instagram.com/iphone.importspvh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da nossa loja"
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white backdrop-blur-md transition-all hover:bg-white/10 hover:text-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/60"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/seu-numero-aqui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-apple-blue to-electric-blue px-5 py-2.5 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-apple-blue/50 focus:outline-none focus:ring-2 focus:ring-apple-blue/60"
            >
              <FaWhatsapp size={19} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white backdrop-blur-md transition-colors hover:text-apple-blue focus:outline-none focus:ring-2 focus:ring-apple-blue/60 md:hidden"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile menu bubbles */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 rounded-3xl border border-white/10 bg-black/80 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-wrap gap-2" aria-label="Navegação mobile">
              {navItems.map(([label, id]) => (
                <button key={id} type="button" onClick={() => scrollToSection(id)} className={bubbleClass}>
                  {label}
                </button>
              ))}
            </nav>
            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
              <a
                href="https://instagram.com/iphone.importspvh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da nossa loja"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-white backdrop-blur-md transition-colors hover:text-apple-blue"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/seu-numero-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-apple-blue to-electric-blue px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-apple-blue/50"
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header
