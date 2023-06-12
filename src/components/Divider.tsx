import Image from 'next/image'
import React, { useState, useEffect } from 'react'

interface DividerProps {
  toId?: string
  right?: boolean
}

const Divider: React.FC<DividerProps> = ({ toId, right }) => {
  const [icons, setIcons] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // empieza con uno para que sean los necesarios + 1
      let newIcons = ['/icons/repair/wrenchW.svg'];

      for (let i = 0; i < (width / 30); i++) {
        newIcons.push('/icons/repair/wrenchW.svg')
      }

      setIcons(newIcons);
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      id={toId}
      className='
        bg-primaryCol
        h-7
        overflow-hidden
      '>
        <div
          className={`
            flex
            text-white
            ${right ? 'animate-divider-animation-right' : 'animate-divider-animation-left'}
            w-[110%]
          `}
        >
          {icons.map((icon, i) => {
            return <Image 
              key={i}
              src={icon}
              width={30}
              height={30}
              alt='icon'
            />
          })}
        </div>
    </div>
  )
}

export default Divider
