import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import styles from './navbar.module.css'

const sections = [
  {
    name: 'Contacto',
    link: '/'
  },
  {
    name: 'Nosotros',
    link: '/'
  },
  {
    name: 'Servicios',
    link: '/'
  },
]

const hrClassName = 'w-11/12 m-auto border-black '

const index = () => {

  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={`
        absolute 
        w-full 
        top-0 
        left-0
        transition-all
        ease-in-out
        z-20
        bg-[#ffffff]
        ${open ? 'h-100' : ''}
        
        `}>
        <div 
          className='flex place-items-center justify-between'
          >
          <Link href='/' className='ml-3 '>
            <Image 
              className='lg:w-[80px]'
              src='/icons/logo-azul-nuevo.svg'
              width='70'
              height='90'
              alt='logo'
              />
          </Link>
          {/* Large Screen */}
          <div 
            className='
              hidden 
              sm:flex
              mr-3
              
            '>
            {sections.map((section, i) => {
              return (
                <Link 
                  href={section.link} 
                  key={section.name}
                  className={`
                    hover:underline 
                    lg:text-lg
                    py-1
                    px-3
                    ${i != 0 && 'border-l border-primaryCol '}
                  `}>
                  {section.name}
                </Link>
              )
            })}
          </div>

          {/* Phone */}
          <button
            onClick={() => setOpen(prev => !prev)}
            className='
              mr-3
              w-10
              h-10
              block 
              sm:hidden
            '>
            {open ? <XMarkIcon /> : <Bars3Icon />}
            
          </button>
        </div>
        
        {open && (
          <div className='block sm:hidden'> 
            <hr className={hrClassName}/>
            <ul>
              {sections.map((section, i) => {
                return (
                  <div key={section.name}>
                    <Link href={section.link}>
                      <li
                        className='
                          text-center
                          py-3
                          hover:bg-[#00000023]
                          text-xl
                        '
                        >
                        {section.name}
                      </li>
                    </Link>
                    {i != (sections.length - 1) && (
                      <hr className={hrClassName}/>
                    )}
                  </div>
                )
              })}
            </ul>
          </div>
        )}
        
        

        <div
          className='
            w-full
            bg-primaryCol
            text-gray-50
            text-sm
            lg:text-base
            text-center
            transition-all
            
          '
          >
          Lorem ipsum dolor sit amet consectetur elit. 
        </div>
      </nav>
        {/* {open && (
          <div className='absolute w-screen h-screen top-0 left-0 bg-[#000000ad] z-10 transition-all'>
          
          </div>
        )} */}
    </>
  )
}

export default index;
