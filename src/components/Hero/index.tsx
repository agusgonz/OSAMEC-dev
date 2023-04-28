import Image from 'next/image'
import React from 'react'
import ContactoButton from '../ContactoButton'
import MainLink from './MainLink'
import SecondaryLink from './SecondaryLink'

const index = () => {
  return (
    <div className='h-screen flex flex-col justify-center gap-3'>
        <div
          className='
          flex
          flex-col
          justify-center
          content-center
          
          py-14
          lg:py-16
        '>
          <Image 
            className='self-center lg:w-[320px]'
            src='/icons/completo-paletaNueva.svg'
            width='275'
            height='90'
            alt='logo'
            /> 
          <div className='
            text-center 
            text-[0.90rem]
            lg:text-base
            text-blueCol 
            font-bold 
            relative
            bottom-7
          '>
            <span className='text-orange'>O</span>rganizacion al 
            <span className='text-orange'> S</span>ervicio del
            <span className='text-orange'> A</span>utomotor
          </div> 
      </div> 
      <div className='overflow-hidden relative'>
        <MainLink />
        <SecondaryLink />
      </div>
    </div>
  )
}

export default index
