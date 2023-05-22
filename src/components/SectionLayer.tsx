import React, { ReactNode } from 'react'

interface SectionLayer {
  children: ReactNode
  title: string
  className: string
}

export default function SectionLayer({
  children,
  title,
  className
}: SectionLayer) {
  return (
    <section
      className={`
        w-full
        
        inline-block
        px-5
        py-14
        lg:px-10
        ${className}
      `}
  >
    <h2 className='
      text-3xl
      sm:text-4xl 
      pb-5
      text-center 
      border-b-2 
      mb-5 
      border-primaryCol
    '>{title}</h2>
    {children}
  </section>
  )
}
