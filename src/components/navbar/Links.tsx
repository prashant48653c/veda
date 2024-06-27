'use client'
import { LinksType } from '@/types/navbar.types'
import { useRouter } from 'next/navigation'
import React from 'react'

const Links:React.FC = () => {

    
    const links:LinksType[]=[
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

    const router=useRouter()
    const handleRoute=(link:LinksType)=>{
        router.push(link.route)
    }
  return (
    <ul className='links' >
        {
            links.map((link,i)=>{
                return <li onClick={()=>handleRoute(link)} className='link' key={i}>{link.name}</li>
            })
        }

    </ul>
  )
}

export default Links