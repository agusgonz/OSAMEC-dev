import React, { ReactNode } from 'react'

interface SectionLayer {
  children: ReactNode
  title: string
}

export default function SectionLayer({
  children,
  title
}: SectionLayer) {
  return (
    <section
      className='
        w-full
        bg-blue-200
        inline-block
        px-5
        py-14
        lg:px-10
        
      '
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
