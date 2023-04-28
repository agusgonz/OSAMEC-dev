import Image from 'next/image'
import React from 'react'

interface ContactButtonProps {
  icon: string
  color: string
  bgColor: string
  text: string
}

const ContactoButton: React.FC<ContactButtonProps> = ({
  icon,
  color,
  bgColor,
  text
}) => {
  return (
    <button
      className={`
        inline-block
        border-2
        rounded-3xl
        border-[${color}]
        ${bgColor}
      `}
    >
      <div
        className='
          p-1
        '
      >
        <Image 
          className='
            inline-block
          '
          src={icon}
          width='50'
          height='50'
          alt='whatsapp icono'
          />
        <div
          className='
            inline-block
          '
        >
          {text}
        </div>
      </div>
    </button>
  )
}

export default ContactoButton


{/* <ContactoButton icon={'/icons/media/whatsappIcon.svg'} color={'#40C351'} text={'Contactanos'} bgColor={'bg-[#4fd71e59]'} /> */}