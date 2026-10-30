import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock, FaCreditCard } from 'react-icons/fa'
import { SiPix } from 'react-icons/si'

const Contato = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contatoInfo = [
    {
      icon: FaWhatsapp,
      titulo: 'WhatsApp',
      descricao: 'Fale conosco agora',
      link: 'https://wa.me/seu-numero-aqui',
      linkText: 'Enviar mensagem',
      color: 'from-pix-green to-green-500'
    },
    {
      icon: FaInstagram,
      titulo: 'Instagram',
      descricao: '@iphone.importspvh',
      link: 'https://instagram.com/iphone.importspvh',
      linkText: 'Seguir no Instagram',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: FaMapMarkerAlt,
      titulo: 'Endereço',
      descricao: 'Av. Jatuarana, 3950',
      info: 'Zona Sul - Porto Velho, RO',
      linkText: 'CEP: 76808-426',
      color: 'from-apple-blue to-electric-blue'
    }
  ]

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
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
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4">
            Visite Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-apple-blue to-electric-blue">Loja</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato ou visite nossa loja física na Zona Sul.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contatoInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-apple-blue/20 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.titulo}</h3>
                <p className="text-gray-400 mb-1">{item.descricao}</p>
                {item.info && <p className="text-sm text-gray-400 mb-3">{item.info}</p>}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-apple-blue font-semibold hover:underline inline-flex items-center space-x-1"
                  >
                    <span>{item.linkText}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ) : (
                  <p className="text-sm text-gray-400 font-medium">{item.linkText}</p>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Map and Additional Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg h-80 border border-white/5"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.1!2d-63.8881!3d-8.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDUnNDIuOCJTIDYzwrA1MycxNy4yIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da nossa loja"
            ></iframe>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Horário */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-apple-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-apple-blue text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">Horário de Atendimento</h3>
                  <p className="text-gray-400 text-sm">
                    Segunda a Sábado<br />
                    <span className="text-white font-medium">Entre em contato para confirmar</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Formas de Pagamento */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/5 rounded-2xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pix-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCreditCard className="text-pix-green text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-3">Formas de Pagamento</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <SiPix className="text-pix-green text-xl" />
                      <span className="text-gray-400 text-sm">PIX <span className="text-pix-green font-semibold">(5-8% desconto)</span></span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaCreditCard className="text-apple-blue text-lg" />
                      <span className="text-gray-400 text-sm">Cartão de Crédito (até 12x)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-apple-blue to-electric-blue rounded-2xl p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Pronto para garantir seu iPhone?</h3>
              <p className="text-white/90 text-sm mb-4">
                Fale com nossos especialistas agora mesmo pelo WhatsApp
              </p>
              <a
                href="https://wa.me/seu-numero-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-apple-blue px-6 py-3 rounded-full font-semibold hover:bg-soft-gray transition-all inline-flex items-center space-x-2"
              >
                <FaWhatsapp size={20} />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contato
