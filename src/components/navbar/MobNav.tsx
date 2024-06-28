'use client'
import { MdOutlineMenu } from 'react-icons/md'
import Links, { links } from './Links'
import Link from 'next/link'
import '../../styles/navbar/navbar.css'
import { useState } from 'react'

const MobNav = () => {
    const [show, setShow] = useState(false)
    const handleShow=()=>{
setShow(!show)
    }
  return (
    <div className='mob-nav mob' >
        <h1>PawPrints</h1>
        <MdOutlineMenu onClick={handleShow} className='mob-menu mob' size={23}/>

        {
            show &&
            <ul className='mob-links'>
            {
                links.map((item,i)=>{
                    return <Link key={i} className='mob-link' href={item.route} >{item.name}</Link>
                })
            }
        
        </ul>
        }
      
    </div>
  )
}

export default MobNav