import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaApple, FaAward, FaHeart, FaShieldAlt } from 'react-icons/fa'

const Sobre = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const valores = [
    {
      icon: FaApple,
      titulo: 'Paixão por Apple',
      descricao: 'Especializados no ecossistema Apple desde 2020'
    },
    {
      icon: FaAward,
      titulo: 'Excelência',
      descricao: 'Compromisso com a qualidade em cada atendimento'
    },
    {
      icon: FaHeart,
      titulo: 'Satisfação',
      descricao: 'Mais de 7.000 clientes satisfeitos em Porto Velho'
    },
    {
      icon: FaShieldAlt,
      titulo: 'Confiança',
      descricao: 'Transparência e garantia em todos os produtos'
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-apple-blue font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-6">
              Sua Referência em <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-electric-blue">Produtos Apple</span> em Porto Velho
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Desde <strong className="text-white">2020</strong>, a <strong className="text-white">nossa loja</strong> é referência
              em produtos Apple em Porto Velho. Trazemos os últimos lançamentos com exclusividade,
              oferecendo sempre produtos 100% originais e homologados.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Nossa missão é proporcionar a melhor experiência Apple para nossos clientes,
              com atendimento especializado, garantia oficial e assistência técnica de qualidade.
              Venha nos visitar na Zona Sul e descubra por que somos a escolha de milhares de pessoas.
            </p>

            {/* Valores */}
            <div className="grid grid-cols-2 gap-4">
              {valores.map((valor, index) => {
                const Icon = valor.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-white/5 p-4 rounded-xl shadow-md hover:border-apple-blue/30 transition-colors"
                  >
                    <Icon className="text-apple-blue text-2xl mb-2" />
                    <h4 className="font-bold text-white text-sm mb-1">{valor.titulo}</h4>
                    <p className="text-xs text-gray-400">{valor.descricao}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="bg-gradient-to-br from-apple-blue to-deep-navy rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80"
                  alt="Produtos Apple na nossa loja"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end">
                  <div className="text-white p-8">
                    <p className="text-2xl font-bold">nossa loja</p>
                    <p className="text-lg">Zona Sul • Porto Velho</p>
                    <div className="mt-4 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full py-2 px-4">
                      <span className="w-2 h-2 bg-pix-green rounded-full"></span>
                      <p className="text-sm font-semibold">Desde 2020</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pix-green/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-apple-blue/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
