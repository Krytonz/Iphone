import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaRocket, FaCheckCircle, FaTools, FaStore } from 'react-icons/fa'

const diferenciais = [
  {
    id: 1,
    icon: FaRocket,
    titulo: 'Lançamentos em Primeira Mão',
    descricao: 'Seja o primeiro a ter os novos modelos Apple em Porto Velho. Acesso antecipado aos lançamentos mais esperados.',
    color: 'from-apple-blue to-electric-blue'
  },
  {
    id: 2,
    icon: FaCheckCircle,
    titulo: 'Produtos 100% Originais',
    descricao: 'Todos os produtos são homologados e com garantia Apple. Combatemos falsificações e garantimos autenticidade.',
    color: 'from-pix-green to-green-500'
  },
  {
    id: 3,
    icon: FaTools,
    titulo: 'Assistência Técnica Especializada',
    descricao: 'Suporte completo para todos os produtos Apple. Equipe treinada para cuidar do seu dispositivo com excelência.',
    color: 'from-gold-accent to-yellow-500'
  },
  {
    id: 4,
    icon: FaStore,
    titulo: 'Loja Física na Zona Sul',
    descricao: 'Visite nossa unidade e conheça os produtos pessoalmente. Atendimento presencial com toda comodidade.',
    color: 'from-purple-500 to-pink-500'
  }
]

const DiferencialCard = ({ diferencial, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = diferencial.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-apple-blue/20 transition-all duration-300 group hover:-translate-y-2 border border-white/5"
    >
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${diferencial.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-white text-3xl" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">
        {diferencial.titulo}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {diferencial.descricao}
      </p>
    </motion.div>
  )
}

const Diferenciais = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="diferenciais" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
            Diferenciais
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Por Que Escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-electric-blue">nossa loja?</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Mais de 6 anos de experiência trazendo o melhor da Apple para Porto Velho
          </p>
        </motion.div>

        {/* Diferenciais Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {diferenciais.map((diferencial, index) => (
            <DiferencialCard key={diferencial.id} diferencial={diferencial} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-apple-blue to-electric-blue rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold mb-2"
              >
                6+
              </motion.div>
              <div className="text-sm md:text-base text-white/90">Anos de Experiência</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-4xl md:text-5xl font-extrabold mb-2"
              >
                7.000+
              </motion.div>
              <div className="text-sm md:text-base text-white/90">Clientes Satisfeitos</div>
            </div>
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-4xl md:text-5xl font-extrabold mb-2"
              >
                100%
              </motion.div>
              <div className="text-sm md:text-base text-white/90">Produtos Originais</div>
            </div>
          </div>
        </motion.div>

        {/* Warning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-br from-red-900/20 to-urgent-red/20 border-2 border-urgent-red/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-urgent-red rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-urgent-red mb-2">
                Alerta: Cuidado com Produtos Falsificados
              </h3>
              <p className="text-gray-300">
                Desconfie de preços muito baixos. Produtos falsificados não têm garantia e podem apresentar problemas.
                Na <strong className="text-white">nossa loja</strong>, você tem garantia de autenticidade e suporte completo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Diferenciais
