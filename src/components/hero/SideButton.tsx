import React from 'react'
import '../../styles/hero/hero.css'
import Image from 'next/image'

const SideButton = () => {
  return (
    <div className='side buttons-round' >
      <button className='btn-round side' >
      <Image src={'chevron.svg'} alt='up' width={20} height={20}/>
      </button>
      <button className='btn-round side' >
        <Image src={'chevrondown.svg'} alt='down' width={20} height={20}/>
      </button>

    </div>
  )
}

export default SideButton