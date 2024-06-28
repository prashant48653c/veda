'use client'
import { LinksType } from '@/types/navbar.types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


export const links:LinksType[]=[
    {
        name:'Campaigns & Topics',
        route:'/home'
    },
     {
        name:'Animals',
        route:'/animal'
    },
    {
        name:'About Us',
        route:'/about'
    },
    {
        name:'Contact',
        route:'/contact'
    }
    
]
const Links:React.FC = () => {

    
    

    const router=useRouter()
    const handleRoute=(link:LinksType)=>{
        router.push(link.route)
    }
  return (
    <ul className='links' >
        {
            links.map((link,i)=>{
                return <li onClick={()=>handleRoute(link)} className='link' key={i}>
                    {link.name}
                    <Image src={'/chevrondown.svg'} alt='chevron' width={20} className='chevs' height={20} />
                    </li>
            })
        }

    </ul>
  )
}

export default Links