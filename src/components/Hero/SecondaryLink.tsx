import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const SecondaryLink = () => {
  const [active, setActive] = useState(false)

  function activeHandler() {
    setActive(true)
    setTimeout(() => setActive(false), 2000)
  }
  return (
    <Link href='/' className='relative group top-2' onClick={activeHandler}>
      <div
        className={`
          h-14
          bg-orange
          relative
          float-right
          inline
          transition-all 
          ${active ? '' : 'group-hover:w-[60%]'}
          ${active ? 'w-[120%]' : 'w-[55%]'}
        `}
        style={{
          borderTop: '0px solid transparent',
          borderLeft:' 3.4rem solid white',
          borderBottom: '3.8rem solid transparent'
        }}
      >
      </div>
      <div
        className={`
          relative
          flex
          
          float-right
          clear-right
          h-14
          bg-orange
          text-gray-50
          text-lg
          text-center
          leading-[3.5rem]
          bottom-[3.7rem]
          transition-all 

          ${active ? '' : 'group-hover:w-[45%]'}
          ${active ? 'w-[100%]' : 'w-[40%]'}
          ${active ? 'justify-center' : 'justify-start'}
        `}
      >
        <Image 
          src='/icons/media/curved-arrow.svg'
          width='20'
          height='20'
          alt='whatsapp Icon'
        />
        <div className='pl-3 sm:text-2xl sm:leading-[3.5rem]'>Conoce mas</div>
      </div>
    </Link>  
  )
}

export default SecondaryLink
