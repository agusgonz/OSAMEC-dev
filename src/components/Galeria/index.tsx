import Image from 'next/image'
import React, { useState } from 'react'
import Contenedor from './Contenedor'
import SectionLayer from '../SectionLayer'

const index = () => {


  return (
    <>
      {/* <SectionLayer title='Galería' className={'bg-blue-100'} id='galeria'> */}
      <div className={'bg-blue-200 p-3 py-10'}>
        <div
            className='
              overflow-hidden
              flex
              justify-center
              p-3
              max-w-5xl
              mx-auto
            '
          >
            <Contenedor />    
        </div>
      </div>
      {/* </SectionLayer> */}

    </>
  )
}

export default index
