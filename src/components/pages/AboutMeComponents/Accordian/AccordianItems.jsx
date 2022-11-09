import { useState } from 'react'

import { BiMinus, BiPlus } from 'react-icons/bi'

function AccordianItems({ item, index }) {
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }
  return (
    <div key={index} onClick={() => toggle(index)} className='acc-item'>
      <div className='acc-tab'>
        <div className='acc-title'>
          <div className='acc-icon'>{item.icon}</div>
          <h3 className='acc-title-header'>{item.language}</h3>
        </div>
        <div>{clicked === index ? <BiPlus /> : <BiMinus />}</div>
      </div>
      <div className={clicked === index ? 'acc-content shown' : 'acc-content'}>
        {item.content}
      </div>
    </div>
  )
}

export default AccordianItems
