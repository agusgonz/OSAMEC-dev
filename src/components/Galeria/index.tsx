import Image from 'next/image'
import React, { useState } from 'react'
import Contenedor from './Contenedor'

const index = () => {


  return (
    <>
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
        '>Conoce mas...</h2>
        <div
          className='
          overflow-hidden
          flex
          justify-center
          '
        >
          <Contenedor />    
        </div>
      </section>
    </>
  )
}

export default index
