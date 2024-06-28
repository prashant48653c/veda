'use client'
import React, { useEffect, useState } from 'react'
import Heading from '../heading/Heading'
import { TestimonialHead } from '@/utils/heading'
import Image from 'next/image'
import '@/styles/testimonial/testimonial.css'
import { AuthorData } from '@/types/service.types'
 
const Testimonial = () => {

  const [count,setCount]=useState(0)
  const [author,setAuthor]=useState<AuthorData[]>([])

 const handlePrev=()=>{
if(count > 0)
  setCount(count -1)
 }
 const handleNext=()=>{
  if(count < 4)
    setCount(count + 1)
 }
  const getData=async():Promise<any>=>{
try{
 
  const url='https://raw.githubusercontent.com/Himal-Marasini/frontend-task/main/testinomial_data.json'
  console.log(url)
  if(typeof url == 'string'){
    const res=await fetch(url)
    const data=await res.json()
    setAuthor(data.testimonial)
     
  }

}catch(err){
  console.log("Error at fetching ",err)
}
  }
useEffect(()=>{
  getData()
  console.log('Hello')
},[])
  

if(author[0])
return (
<section className='testimonial-section section'>
<Heading {...TestimonialHead} />

<div className="testimonial flex">
<div className="testimonial-image">
<Image src={author[count].imagePath} alt='testimonial picture' className='testimonial-img' width={300} height={400} />
</div>

<div className="testimonial-detail">
<div>
<Image src={'/quote.svg'} alt='quote' className='quote' width={25} height={25} />
</div>
<p>{author[count].content}</p>
<b>{author[count].fullName}</b>
<div className='buttons-circle' >

      <button onClick={handlePrev} className='btn-round' >
      <Image src={'chevron.svg'} alt='up' className='chev'  width={20} height={20}/>
      </button>

      <button onClick={handleNext} className='btn-circle' >
        <Image src={'chevx.svg'} alt='down'  width={20} height={20}/>
      </button>

    </div>
</div>
</div>



</section>
)
}

export default Testimonial