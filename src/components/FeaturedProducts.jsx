import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

const produtos = [
  {
    id: 1,
    slug: 'iphone-18-pro-max',
    nome: 'iPhone 18 Pro Max',
    especificacoes: '256GB • Titânio Natural',
    preco: 9499,
    precoPix: 8999,
    badge: 'LANÇAMENTO',
    badgeColor: 'bg-urgent-red',
    desconto: '5%',
    imagem: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80'
  },
  {
    id: 2,
    slug: 'macbook-air-m3',
    nome: 'MacBook Air M3',
    especificacoes: '13" • 16GB RAM • 512GB SSD',
    preco: 10999,
    precoPix: 10399,
    badge: 'NOVO',
    badgeColor: 'bg-apple-blue',
    desconto: '5%',
    imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80'
  },
  {
    id: 3,
    slug: 'ipad-pro',
    nome: 'iPad Pro',
    especificacoes: '12.9" • M2 • 256GB • Wi-Fi',
    preco: 8999,
    precoPix: 8549,
    badge: 'OFERTA',
    badgeColor: 'bg-pix-green',
    desconto: '5%',
    imagem: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80'
  },
  {
    id: 4,
    slug: 'apple-watch-series-10',
    nome: 'Apple Watch Series 10',
    especificacoes: '45mm • GPS + Cellular • Titânio',
    preco: 4999,
    precoPix: 4699,
    badge: 'DESTAQUE',
    badgeColor: 'bg-gold-accent',
    desconto: '6%',
    imagem: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&q=80'
  }
]

const ProductCard = ({ produto, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:shadow-apple-blue/20 transition-all duration-300 group hover:-translate-y-2 border border-white/5"
    >
      {/* Badge */}
      <div className={`${produto.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4`}>
        {produto.badge}
      </div>

      {/* Product Image */}
      <Link to={`/produto/${produto.slug}`}>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl aspect-square flex items-center justify-center mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* Product Info */}
      <Link to={`/produto/${produto.slug}`} className="block mb-4">
        <h3 className="text-xl font-bold text-white mb-2 hover:text-apple-blue transition-colors">
          {produto.nome}
        </h3>
        <p className="text-sm text-gray-400">{produto.especificacoes}</p>
      </Link>

      {/* Price */}
      <div className="mb-4">
        <div className="flex items-baseline space-x-2 mb-1">
          <span className="text-sm text-gray-500 line-through">
            R$ {produto.preco.toLocaleString('pt-BR')}
          </span>
          <span className="text-xs bg-pix-green/20 text-pix-green font-semibold px-2 py-1 rounded">
            {produto.desconto} OFF
          </span>
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-white">
            R$ {produto.precoPix.toLocaleString('pt-BR')}
          </span>
        </div>
        <p className="text-xs text-pix-green font-semibold mt-1">no PIX</p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2">
        <Link
          to={`/produto/${produto.slug}`}
          className="w-full bg-gradient-to-r from-apple-blue to-electric-blue text-white py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-apple-blue/50 transition-all flex items-center justify-center space-x-2 group-hover:scale-105"
        >
          <span>Ver Detalhes</span>
        </Link>
        <a
          href={`https://wa.me/seu-numero-aqui?text=Olá! Tenho interesse no ${produto.nome}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
        >
          <FaWhatsapp size={20} />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Payment Info */}
      <p className="text-xs text-gray-500 text-center mt-3">
        ou em até 12x no cartão
      </p>
    </motion.div>
  )
}

const FeaturedProducts = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="produtos" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-apple-blue font-semibold text-sm uppercase tracking-wider">
            Produtos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Lançamentos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-electric-blue">Destaque</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Seja o primeiro em Porto Velho a ter os últimos lançamentos Apple. Produtos 100% originais com garantia.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="mobile-snap-row grid grid-cols-1 gap-6 overflow-x-auto pb-4 md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {produtos.map((produto, index) => (
            <ProductCard key={produto.id} produto={produto} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <button
            onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Ver Catálogo Completo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProducts
