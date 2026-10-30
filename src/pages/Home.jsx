import Header from '../components/Header'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Reparos from '../components/Reparos'
import Diferenciais from '../components/Diferenciais'
import Sobre from '../components/Sobre'
import Contato from '../components/Contato'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Reparos />
      <Diferenciais />
      <Sobre />
      <Contato />
      <Footer />
    </div>
  )
}

export default Home
