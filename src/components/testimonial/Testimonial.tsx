import React from 'react'
import Heading from '../heading/Heading'
import { TestimonialHead } from '@/utils/heading'
import Image from 'next/image'
import '@/styles/testimonial/testimonial.css'
import SideButton from '../hero/SideButton'
const Testimonial = () => {
return (
<section className='testimonial-section section'>
<Heading {...TestimonialHead} />

<div className="testimonial flex">
<div className="testimonial-image">
<Image src={'/testimonial.png'} alt='testimonial picture' className='testimonial-img' width={300} height={400} />
</div>

<div className="testimonial-detail">
<div>
<Image src={'/quote.svg'} alt='quote' className='quote' width={25} height={25} />
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sed rerum minima rem sit quos, amet et incidunt eius similique maxime nostrum qui neque, veniam libero soluta fugit, exercitationem eum.</p>
<b>Gal G.</b>
<div className='buttons-circle' >
      <button className='btn-round' >
      <Image src={'chevron.svg'} alt='up' className='chev'  width={20} height={20}/>
      </button>
      <button className='btn-circle' >
        <Image src={'chevx.svg'} alt='down'  width={20} height={20}/>
      </button>

    </div>
</div>
</div>



</section>
)
}

export default Testimonial