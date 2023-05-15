import React, { ReactNode } from 'react'

interface ButtonGProps {
  onClick: () => void
  children: ReactNode
  right?: boolean
}

const ButtonG: React.FC<ButtonGProps> = ({
  onClick,
  children,
  right
}) => {
  return (
    <div
      className={`
        w-10
        h-full
        absolute
        z-10
        top-1/2
        translate-y-[-50%]
        bg-[#00000066]
        ${right ? 'right-0' : 'left-0'}
        flex
        justify-center
        `}
        >
      <button
        className='
          w-full
          focus:outline
        '
        onClick={onClick}
      >
        {children}
        </button>
    </div>
  )
}

export default ButtonG
