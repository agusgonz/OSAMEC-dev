import Image from 'next/image'
import { Roboto } from 'next/font/google'

const font = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div
      className={`
        ${font.className}
      `}
    >
      
    </div>
  )
}
