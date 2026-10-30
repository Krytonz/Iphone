import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp, FaMobileAlt, FaBatteryFull, FaTools, FaWrench, FaShieldAlt, FaClock } from 'react-icons/fa'

const servicos = [
  {
    id: 1,
    icon: FaMobileAlt,
    titulo: 'Troca de Tela',
    descricao: 'Substituição de tela com peças originais Apple. Garantia de qualidade e funcionalidade.',
    preco: 'A partir de R$ 899',
    tempo: '2-3 horas',
    color: 'from-apple-blue to-electric-blue'
  },
  {
    id: 2,
    icon: FaBatteryFull,
    titulo: 'Troca de Bateria',
    descricao: 'Baterias originais Apple com garantia. Devolva a autonomia do seu iPhone.',
    preco: 'A partir de R$ 399',
    tempo: '1-2 horas',
    color: 'from-pix-green to-green-500'
  },
  {
    id: 3,
    icon: FaTools,
    titulo: 'Reparos Básicos',
    descricao: 'Problemas de software, câmera, alto-falante e outros componentes.',
    preco: 'Consulte',
    tempo: 'Variável',
    color: 'from-gold-accent to-yellow-500'
  },
  {
    id: 4,
    icon: FaWrench,
    titulo: 'Manutenção Preventiva',
    descricao: 'Limpeza, atualização e verificação completa do seu dispositivo Apple.',
    preco: 'A partir de R$ 149',
    tempo: '1 hora',
    color: 'from-purple-500 to-pink-500'
  }
]

const ServicoCard = ({ servico, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = servico.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-apple-blue/20 transition-all duration-300 group hover:-translate-y-2 border border-white/5"
    >
      {/* Icon */}
      <div className={`w-16 h-16 bg-gradient-to-br ${servico.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="text-white text-3xl" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3">
        {servico.titulo}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-4">
        {servico.descricao}
      </p>

      {/* Info */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Valor:</span>
          <span className="text-pix-green font-semibold">{servico.preco}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Tempo:</span>
          <span className="text-white font-semibold">{servico.tempo}</span>
        </div>
      </div>

      {/* CTA */}
      <a
        href={`https://wa.me/seu-numero-aqui?text=Olá! Gostaria de fazer um orçamento para ${servico.titulo}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-gradient-to-r from-apple-blue to-electric-blue text-white py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-apple-blue/50 transition-all flex items-center justify-center space-x-2 group-hover:scale-105"
      >
        <FaWhatsapp size={20} />
        <span>Fazer Orçamento</span>
      </a>
    </motion.div>
  )
}

const Reparos = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="reparos" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
            Assistência Técnica
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Serviços de <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-electric-blue">Reparos</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Equipe especializada em produtos Apple. Peças originais e garantia em todos os serviços.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicos.map((servico, index) => (
            <ServicoCard key={servico.id} servico={servico} index={index} />
          ))}
        </div>

        {/* Why Choose Us for Repairs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Por Que Escolher Nossa Assistência?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-apple-blue to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Peças Originais</h4>
              <p className="text-gray-400 text-sm">
                Utilizamos apenas peças originais Apple com garantia oficial
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pix-green to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTools className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Técnicos Especializados</h4>
              <p className="text-gray-400 text-sm">
                Equipe treinada e certificada para produtos Apple
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-accent to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-white text-2xl" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Atendimento Rápido</h4>
              <p className="text-gray-400 text-sm">
                Maioria dos reparos concluídos no mesmo dia
              </p>
            </div>
          </div>
        </motion.div>

        {/* Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-urgent-red to-red-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Seu iPhone quebrou?
          </h3>
          <p className="text-white/90 mb-6">
            Fale conosco agora e faça um diagnóstico gratuito!
          </p>
          <a
            href="https://wa.me/seu-numero-aqui?text=Olá! Meu iPhone apresentou um problema e preciso de ajuda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-urgent-red px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105"
          >
            <FaWhatsapp size={24} />
            <span>Falar com Especialista</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Reparos
