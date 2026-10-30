import { FaWhatsapp, FaInstagram, FaApple, FaHeart } from 'react-icons/fa'
import { SiPix } from 'react-icons/si'

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-deep-navy to-soft-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-apple-blue to-electric-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">iP</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">nossa loja</h3>
                <p className="text-xs text-white/60">Zona Sul</p>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Sua referência em produtos Apple em Porto Velho desde 2020.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/seu-numero-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-pix-green rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="https://instagram.com/iphone.importspvh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-sm text-white/70 hover:text-apple-blue transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('produtos')} className="text-sm text-white/70 hover:text-apple-blue transition-colors">
                  Produtos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('diferenciais')} className="text-sm text-white/70 hover:text-apple-blue transition-colors">
                  Diferenciais
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-sm text-white/70 hover:text-apple-blue transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contato')} className="text-sm text-white/70 hover:text-apple-blue transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Produtos</h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/70 flex items-center space-x-2">
                <FaApple className="text-apple-blue" />
                <span>iPhone</span>
              </li>
              <li className="text-sm text-white/70 flex items-center space-x-2">
                <FaApple className="text-apple-blue" />
                <span>MacBook</span>
              </li>
              <li className="text-sm text-white/70 flex items-center space-x-2">
                <FaApple className="text-apple-blue" />
                <span>iPad</span>
              </li>
              <li className="text-sm text-white/70 flex items-center space-x-2">
                <FaApple className="text-apple-blue" />
                <span>Apple Watch</span>
              </li>
              <li className="text-sm text-white/70 flex items-center space-x-2">
                <FaApple className="text-apple-blue" />
                <span>Acessórios</span>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-sm text-white/70">
                <span className="block font-semibold text-white mb-1">Endereço</span>
                Av. Jatuarana, 3950<br />
                Zona Sul - Porto Velho, RO<br />
                CEP: 76808-426
              </li>
              <li className="text-sm text-white/70">
                <span className="block font-semibold text-white mb-1">Horário</span>
                Segunda a Sábado<br />
                Consulte via WhatsApp
              </li>
            </ul>
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <p className="text-sm text-white/70 mb-2">Formas de Pagamento</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                  <SiPix className="text-pix-green text-xl" />
                  <span className="text-xs font-semibold">PIX</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 4h16v2H4V4zm0 4h16v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/>
                  </svg>
                  <span className="text-xs font-semibold">Cartão</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-white/70 mb-1">Produtos 100% Originais</p>
              <p className="text-xs text-white/50">Garantia Apple Oficial</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-white/50">
            <p>
              © {new Date().getFullYear()} nossa loja. Todos os direitos reservados.
            </p>
            <p className="flex items-center space-x-1">
              <span>Feito com</span>
              <FaHeart className="text-urgent-red" />
              <span>em Porto Velho</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
