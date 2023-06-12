import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ButtonG from './ButtonG'
import styles from './galeria.module.css'
import useWindowSize from '@/hooks/useWindowSize'

const Contenedor = () => {

  const windowSize = useWindowSize()

  
  const [images, setImages] = useState(() => {
    const imgs = [
      {
        alt: 'Taller de frente',
        src: '/images/tallerFrente.jpg',
      },
      {
        alt: 'Recepcion',
        src: '/images/recepcion.jpg',

      },
      {
        alt: 'maquinaria del taller',
        src: '/images/maquina.jpg',
      },
      {
        alt: 'Taller por dentro',
        src: '/images/sala.jpg',
      },
     
    ]

    return imgs.map((img, index) => {
      return {...img, id: index + 1}
    })
  })

  const [indexImg, setIndexImg] = useState(1)

  const containerRef = useRef<HTMLUListElement>(null)

  function goToImage(q: number) {

    let sum = q
    
    if (windowSize && windowSize.width > 640) {
      sum += q
    } 

    setIndexImg(prev => {
      let img

      function goTo(img: HTMLElement) {
        img.scrollIntoView({behavior: "smooth", block: "nearest", inline:'start'})
      }

      if (prev + sum > images.length) {
        img = document.getElementById(`${1}`) as HTMLElement
        goTo(img)
        return 1
      
      } else if (prev + sum <= 0) {
        img = document.getElementById(`${images.length}`) as HTMLElement
        goTo(img)
        return images.length

      } else {
        img = document.getElementById(`${prev + sum}`) as HTMLElement
        goTo(img)
        return prev + sum

      }
           
    })
  }

  

  return (
    <div
      className='
        relative
        
      '
    >
      <ButtonG onClick={() => goToImage(-1)}><ChevronLeftIcon color='white'/></ButtonG>  
      <ButtonG onClick={() => goToImage(1)} right={true}><ChevronRightIcon color='white'/></ButtonG>  
      
      <ul
        className={`
          inline-block
          whitespace-nowrap
          w-full
          h-full
          overflow-auto
          scroll-smooth
          snap-x
          snap-mandatory
          ${styles.hideScrollbar}
        `}
        ref={containerRef}
      
      >
        
        {images.map((image, i) => {

          return (
            <li 
              id={`${image.id}`}
              key={image.alt}
              className={`
                inline-block
                w-full
                sm:w-1/2
                h-full
                snap-center
              `}
            >
              <Image 
                className='
                  inline-block
                  w-full
                  h-full
                  object-cover

                '
                src={image.src}
                alt={image.alt}
                quality={100}
                width={300}
                height={300}
                onLoad={() => containerRef.current?.scroll(0, 0)}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Contenedor
