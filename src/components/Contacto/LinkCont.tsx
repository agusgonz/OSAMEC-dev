import Image from 'next/image'
import React, { ReactElement } from 'react'

interface LinkContProps {
  icon: string
  colorBg: string
  colorTx: string
  name: string
  href: string
}

const LinkCont: React.FC<LinkContProps> = ({
  icon,
  colorBg,
  colorTx,
  name,
  href
}) => {
  return (
    <a
      target="_blank" 
      rel="noopener noreferrer"
      href={href}
      className={`
        w-36
        text-${colorTx}
        bg-${colorBg} 
        p-3

        rounded
        inline-block
      `}
    >
      <div
        className='
          flex
          justify-center
          leading-loose
          gap-1
        '
      >
        <Image 
          src={icon} 
          alt={`${name} icon`} 
          width={30}       
          height={30}  
          />
        {name}
      </div>
    </a>
  )
}

export default LinkCont
