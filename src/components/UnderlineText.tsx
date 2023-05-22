import Image from 'next/image'
import React, { ReactNode } from 'react'

interface UnderlineTextProps {
  children: ReactNode
  nonUnderline?: boolean
  underlineColor?: string
  imageSrc: string
  className?: string
  textBig?: boolean
}

const UnderlineText: React.FC<UnderlineTextProps> = ({
  children,
  underlineColor,
  imageSrc,
  className,
  textBig,
  nonUnderline
}) => {
  return (
    <div 
      className={`
        ${underlineColor ? `decoration-${underlineColor}`: 'decoration-primaryCol'}
        ${nonUnderline ? null : 'underline' }

        
        underline-offset-2
        pb-5 
        xl:pb-6 
        ${textBig ? 'text-2xl xl:text-3xl' : 'text-lg xl:text-xl'}
        
        ${className}
      `}
    >
      <Image 
        className='inline'
        src={imageSrc}
        width={20}
        height={20}
        alt='star'
      />
    {children}
  </div> 
  )
}

export default UnderlineText
