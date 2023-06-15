import Image from 'next/image'
import React, { useState } from 'react'
import Contenedor from './Contenedor'
import SectionLayer from '../SectionLayer'

const index = () => {


  return (
    <>
      {/* <SectionLayer title='Galería' className={'bg-blue-100'} id='galeria'> */}
      <div className={'w-full'}>
        <div
            className='
              overflow-hidden
              flex
              justify-center
              w-full
              h-full
              max-h-96
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
