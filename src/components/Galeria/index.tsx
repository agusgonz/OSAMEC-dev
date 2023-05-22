import Image from 'next/image'
import React, { useState } from 'react'
import Contenedor from './Contenedor'
import SectionLayer from '../SectionLayer'

const index = () => {


  return (
    <>
      <SectionLayer title='Galería' className={'bg-blue-100'} id='galeria'>
        <div
            className='
              overflow-hidden
              flex
              justify-center
              p-3
              max-w-7xl
              mx-auto
            '
          >
            <Contenedor />    
        </div>
      </SectionLayer>

    </>
  )
}

export default index
