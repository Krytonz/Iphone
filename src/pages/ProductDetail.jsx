import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

const produtosData = {
  'iphone-18-pro-max': {
    nome: 'iPhone 18 Pro Max',
    especificacoes: '256GB',
    preco: 9499,
    precoPix: 8999,
    desconto: '5%',
    descricao: 'O iPhone 18 Pro Max representa o ápice da tecnologia Apple. Com processador A18 Pro, câmera tripla de última geração e tela Super Retina XDR de 6.7", oferece uma experiência incomparável.',
    imagem: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=800&q=80',
    cores: [
      { nome: 'Titânio Natural', hex: '#8B8680' },
      { nome: 'Titânio Azul', hex: '#3A4A5C' },
      { nome: 'Titânio Preto', hex: '#2C2C2E' },
      { nome: 'Titânio Branco', hex: '#E8E8ED' }
    ],
    capacidades: ['256GB', '512GB', '1TB'],
    caracteristicas: [
      'Chip A18 Pro',
      'Tela Super Retina XDR 6.7"',
      'Câmera tripla 48MP + 12MP + 12MP',
      'Gravação em 8K',
      'Bateria com autonomia de 29 horas',
      '5G ultrarrápido',
      'Face ID avançado',
      'Resistente à água IP68'
    ]
  },
  'macbook-air-m3': {
    nome: 'MacBook Air M3',
    especificacoes: '13" • 16GB RAM • 512GB SSD',
    preco: 10999,
    precoPix: 10399,
    desconto: '5%',
    descricao: 'O MacBook Air com chip M3 é incrivelmente fino e leve, oferecendo desempenho excepcional. Perfeito para trabalho, estudos e entretenimento.',
    imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    cores: [
      { nome: 'Meia-Noite', hex: '#1E1E28' },
      { nome: 'Luz Estelar', hex: '#F0E4D7' },
      { nome: 'Prata', hex: '#E3E4E5' },
      { nome: 'Cinza Espacial', hex: '#7D7E80' }
    ],
    capacidades: ['256GB', '512GB', '1TB', '2TB'],
    caracteristicas: [
      'Chip Apple M3',
      'Tela Liquid Retina 13.6"',
      'Até 18 horas de bateria',
      '16GB de memória unificada',
      'Câmera FaceTime HD 1080p',
      'MagSafe 3',
      'Dois ports Thunderbolt',
      'Peso: apenas 1.24kg'
    ]
  },
  'ipad-pro': {
    nome: 'iPad Pro',
    especificacoes: '12.9" • M2 • 256GB • Wi-Fi',
    preco: 8999,
    precoPix: 8549,
    desconto: '5%',
    descricao: 'iPad Pro com chip M2 oferece desempenho de notebook em um design portátil. Tela Liquid Retina XDR com ProMotion e suporte a Apple Pencil.',
    imagem: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
    cores: [
      { nome: 'Cinza Espacial', hex: '#535355' },
      { nome: 'Prata', hex: '#E3E4E5' }
    ],
    capacidades: ['128GB', '256GB', '512GB', '1TB', '2TB'],
    caracteristicas: [
      'Chip Apple M2',
      'Tela Liquid Retina XDR 12.9"',
      'ProMotion 120Hz',
      'Câmera traseira 12MP + 10MP',
      'Câmera frontal 12MP ultra-wide',
      'Suporta Apple Pencil (2ª geração)',
      'Suporta Magic Keyboard',
      'Face ID',
      'USB-C com Thunderbolt'
    ]
  },
  'apple-watch-series-10': {
    nome: 'Apple Watch Series 10',
    especificacoes: '45mm • GPS + Cellular • Titânio',
    preco: 4999,
    precoPix: 4699,
    desconto: '6%',
    descricao: 'O Apple Watch mais avançado de todos os tempos. Monitore sua saúde, fitness e mantenha-se conectado onde quer que esteja.',
    imagem: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80',
    cores: [
      { nome: 'Titânio Natural', hex: '#8B8680' },
      { nome: 'Titânio Preto', hex: '#2C2C2E' }
    ],
    capacidades: ['GPS', 'GPS + Cellular'],
    caracteristicas: [
      'Tela Always-On Retina',
      'Monitoramento de frequência cardíaca',
      'ECG a qualquer momento',
      'Medição de oxigênio no sangue',
      'Detecção de queda e acidente',
      'Resistente à água 50m',
      'Bateria até 18 horas',
      'Chamadas e mensagens sem iPhone'
    ]
  }
}

const ProductDetail = () => {
  const { slug } = useParams()
  const produto = produtosData[slug]

  if (!produto) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produto não encontrado</h1>
          <Link to="/" className="text-apple-blue hover:underline">
                Voltar para home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaArrowLeft />
              <span>Voltar</span>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 sticky top-24">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{produto.nome}</h1>
              <p className="text-xl text-gray-400 mb-6">{produto.especificacoes}</p>

              {/* Price */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="text-2xl text-gray-400 line-through">
                    R$ {produto.preco.toLocaleString('pt-BR')}
                  </span>
                  <span className="bg-pix-green/20 text-pix-green text-sm font-bold px-3 py-1 rounded-full">
                    {produto.desconto} OFF
                  </span>
                </div>
                <div className="text-5xl font-extrabold mb-2">
                  R$ {produto.precoPix.toLocaleString('pt-BR')}
                </div>
                <p className="text-pix-green font-semibold">no PIX</p>
                <p className="text-gray-400 text-sm mt-2">ou em até 12x no cartão</p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {produto.descricao}
              </p>

              {/* Colors */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Cores Disponíveis</h3>
                <div className="flex flex-wrap gap-4">
                  {produto.cores.map((cor, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div
                        className="w-10 h-10 rounded-full border-2 border-white/20"
                        style={{ backgroundColor: cor.hex }}
                      ></div>
                      <span className="text-sm text-gray-400">{cor.nome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capacities */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Capacidades</h3>
                <div className="flex flex-wrap gap-3">
                  {produto.capacidades.map((capacidade, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {capacidade}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Características</h3>
                <div className="space-y-3">
                  {produto.caracteristicas.map((caracteristica, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-pix-green mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="sticky bottom-6 bg-gradient-to-r from-apple-blue to-electric-blue rounded-2xl p-6">
                <p className="text-white font-semibold mb-4">
                  Interessado? Fale conosco agora!
                </p>
                <a
                  href={`https://wa.me/seu-numero-aqui?text=Olá! Tenho interesse no ${produto.nome} - ${produto.especificacoes}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-apple-blue py-4 rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp size={24} />
                  <span>Consultar no WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetail
