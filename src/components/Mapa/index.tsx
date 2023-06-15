import React from 'react'
import MyMap from './MyMap'
import SectionLayer from '../SectionLayer'
import useWindowSize from '@/hooks/useWindowSize'
import DayRow from './DayRow'
import UnderlineText from '../UnderlineText'

import fontstyles from '../../styles/fonts.module.css'

const index = () => {

  const windowSize = useWindowSize()

  const smallMapSize = {
    width: `${windowSize.width <= 450 ? '300px' : '400px'}`,
    height: `${windowSize.width <= 450 ? '500px' : '400px'}`
  }
  const MapSize = {
    width: `${windowSize.width >= 1300 ? '700px' : '500px'}`,
    height: `400px`
  }

  return (
    // <SectionLayer title='Nuestro Taller' className={'bg-blue-200'} id='mapa'>
    <div className={`bg-blue-200 py-10 ${fontstyles.regularFont}`}>
      <div
        className='
          flex
          flex-col
          md:flex-row
          justify-evenly
          items-center
          p-3
          
        '
      >
        <MyMap size={windowSize.width >= 1000 ? MapSize : smallMapSize}/>
        <div className='pl-3 pt-5 md:pt-0'>

          <UnderlineText 
            imageSrc={'/icons/media/mark-orange.svg'}
            className='md:whitespace-nowrap'
          >Dirección: Ramírez 2664, Cuarta Sección, Mendoza Capital</UnderlineText>
            <UnderlineText 
            imageSrc={'/icons/media/tick-orange.svg'}
          >Lunes a Viernes</UnderlineText>
          <UnderlineText 
            imageSrc={'/icons/media/cross-orange.svg'}
          ><strong>Cerrado:</strong> Sabados y Domingo</UnderlineText>
          <UnderlineText 
            imageSrc={'/icons/media/clock-orange.svg'}
          >Horarios: 8:30-12:30, 13:30-17:30</UnderlineText>
          <UnderlineText 
            imageSrc={'/icons/media/questionmark-gray.svg'}
            className={'text-gray-500 text-md xl:text-md'}
            nonUnderline
            underlineColor={'gray-500'}
          >Consultar horarios feriados</UnderlineText>
        </div>

      </div>
    </div>
    // </SectionLayer>
  )
}

export default index
