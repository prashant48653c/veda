 import '@/styles/about/about.css'
import Heading from '../heading/Heading'
import {  headingProps } from "@/types/heading.types"
import Image from 'next/image'
import Button from '../button/Button'
import { DonationBtn } from '@/types/btn.types'


const About: React.FC = () => {
return (
<section className='section'>
<Heading {...headingProps}  />

<div className="flex about">
<div className="about-text">
<h4>Your donations help us run important projects</h4>
<p>As a pioneer of the no-kill movement, <span>Paw Print</span> leads the way with national and international programs designed to increase adoptions and raise awareness about the plight of homeless animals, continuing to make a significant impact.</p>
<Button {...DonationBtn}/>
</div>
<div className="about-image">
<Image src='/dog.png' alt='about-image' className='about-img' width={200} height={200} />
</div>
</div>
</section>
)
}

export default About