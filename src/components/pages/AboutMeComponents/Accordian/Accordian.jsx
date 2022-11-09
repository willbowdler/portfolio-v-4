import { useState } from 'react'

import { AccData1 } from './AccData'
import AccordianItems from './AccordianItems'

function Accordian({ first }) {
  return (
    <div className='accordian-container'>
      {AccData1.map((item, index) => {
        if (index <= 3 && first) {
          return <AccordianItems item={item} index={index} />
        }
        if (index >= 4 && !first) {
          return <AccordianItems item={item} index={index} />
        }
      })}
    </div>
  )
}

export default Accordian
