import Image from 'next/image'
import logo from '/completo-paletaOriginal.svg'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Contacto from '@/components/Contacto'
import Nosotros from '@/components/Nosotros'
import Divider from '@/components/Divider'
import Galeria from '@/components/Galeria'
import Mapa from '@/components/Mapa'
import Reviews from '@/components/Reviews'

const font = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div className={font.className}>
      <Navbar />
      <Hero />
      <Divider toId={'nosotros'}/>
      <Nosotros />
      <Galeria />
      {/* <Reviews />
      <Mapa /> */}
      <Contacto />
      
    </div>
  )
}
