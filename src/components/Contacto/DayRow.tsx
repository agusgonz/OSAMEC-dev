import React from 'react'

interface DayRowProps {
  day: string
  closed?: boolean
}

const DayRow: React.FC<DayRowProps> = ({
  day,
  closed
}) => {
  return (
    <ul
      className='
        w-fit
        text-lg
        lg:text-xl
        list-disc
      '
    >
      <li>
        <div
          className='inline-block pr-3'
        >
          {day}:
        </div>
          {closed ? 'Cerrado' : '8:30-12:30, 13:30-17:30'}
      </li>
    </ul>
  )
}

export default DayRow
