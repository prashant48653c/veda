import React from 'react'
import '../../styles/hero/hero.css'
import Image from 'next/image'

const SideButton = () => {
  return (
    <div className='buttons-round' >
      <button className='btn-round' >
      <Image src={'chevron.svg'} alt='up' width={20} height={20}/>
      </button>
      <button className='btn-round' >
        <Image src={'chevrondown.svg'} alt='down' width={20} height={20}/>
      </button>

    </div>
  )
}

export default SideButton