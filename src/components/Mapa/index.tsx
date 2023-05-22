import React from 'react'
import MyMap from './MyMap'
import SectionLayer from '../SectionLayer'
import useWindowSize from '@/hooks/useWindowSize'

const index = () => {

  const windowSize = useWindowSize()
  console.log(windowSize.width)

  const smallMapSize = {
    width: `${windowSize.width >= 650 ? '600px' 
      : `${windowSize.width <= 450 ? '300px' : '400px'}` 
  }`,
    height: `400px`
  }
  const MapSize = {
    width: `${windowSize.width >= 1300 ? '1000px' : '800px'}`,
    height: `500px`
  }

  return (
    <SectionLayer title='Ubicación' className={'bg-blue-200'}>
      <div
        className='
          flex
          flex-col
          justify-center
          items-center
          
          gap-2
        '
      >
        <div
          className='md:text-lg underline underline-offset-2'
        >
          Dirección: Ramírez 2664, M5500 Mendoza
        </div> 
        <MyMap size={windowSize.width >= 1000 ? MapSize : smallMapSize}/>

      </div>
    </SectionLayer>
  )
}

export default index
