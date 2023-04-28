import Image from 'next/image'
import logo from '/completo-paletaOriginal.svg'
import { Roboto } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

const font = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className='border-t-2 h-60'>
aaaaaaaa
      </div>
      <div className='border-t-2 h-60' id='a'>
aaaaaaaa
      </div>
      
    </>
  )
}
