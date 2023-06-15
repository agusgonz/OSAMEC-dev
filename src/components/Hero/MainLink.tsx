import Image from 'next/image'
import Link from 'next/link'
import React, { use, useState } from 'react'


const MainLink = () => {

  const [active, setActive] = useState(false)

  function activeHandler() {
    setActive(true)
    setTimeout(() => setActive(false), 2000)
    setTimeout(() => setActive(false), 2000)
  }

  return (
    <Link href='#contacto' className='group' onClick={activeHandler}
    >
      <div
        className={`
          h-14
          bg-darkBlueCol
          absolute
          transition-all 
          ${active ? '' : 'group-hover:w-[80%]'}
          ${active ? 'w-[120%]' : 'w-[75%]'}
        `}
        style={{
          borderTop: '3.8rem solid transparent',
          borderRight:' 3.4rem solid white',
          borderBottom: '0px solid transparent'
        }}
      >
      </div>
      <div
        className={`
          relative
          flex
          h-14
          bg-darkBlueCol
          text-gray-50
          text-2xl
          text-center
          leading-[3.5rem]
          transition-all 
          justify-end
          ${active ? '' : 'group-hover:w-[60%]'}
          ${active ? 'w-[100%]' : 'w-[55%]'}
          ${active ? 'justify-center' : 'justify-end'}

          `}
        //   ${active ? 'delay-200' : ''}

      >
        <div className={`
          pr-2 lg:text-3xl lg:leading-[3.5rem] 
        `}>
          Contactanos
        </div>
        {/* <Image 
          src='/icons/media/whatsapp-blanco.svg'
          width='30'
          height='20'
          alt='whatsapp Icon'
        /> */}
      </div>
    </Link>
  )
}

export default MainLink
