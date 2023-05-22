import Image from 'next/image'
import React, { useState } from 'react'
import Contenedor from './Contenedor'
import SectionLayer from '../SectionLayer'

const index = () => {


  return (
    <>
      <SectionLayer title='Galería'>
        <div
            className='
            overflow-hidden
            flex
            justify-center
            '
          >
            <Contenedor />    
        </div>
      </SectionLayer>

    </>
  )
}

export default index
