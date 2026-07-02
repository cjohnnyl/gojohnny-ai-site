import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import ToneSelector from '@/components/sections/ToneSelector'
import ComoFunciona from '@/components/sections/ComoFunciona'
import Comparativo from '@/components/sections/Comparativo'
import Showcase from '@/components/sections/Showcase'
import Depoimentos from '@/components/sections/Depoimentos'
import Preco from '@/components/sections/Preco'
import Formulario from '@/components/sections/Formulario'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <ToneSelector />
      <ComoFunciona />
      <Comparativo />
      <Showcase />
      <Depoimentos />
      <Preco />
      <Formulario />
      <Footer />
    </main>
  )
}
