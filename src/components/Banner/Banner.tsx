import React from 'react'
import '@/styles/banner/banner.css'
import Image from 'next/image'
const Banner = () => {
return (
    <div className='banner-container'>
    <section className='section banner'>
   
<div className="wave">
<Image src={'/cat.png'} alt="arrow" width={216} height={216} />

</div>
<div className="wave2 wave">
<Image src={'/ban.png'} alt="arrow" width={216} height={216} />

 
</div>
<div className="banner-detail">
<h3>Get Involved</h3>
<p>Our work is made possible by the generosity of people like you, who have contributed to
our mission to improve the lives of all animals.</p>
<div className='flex'>
<button className='btn btn-outline' >
<span>Adopt & Donate to help us</span>
<Image src={'/arr.svg'} alt="arrow" width={16} height={16} />
    
</button>
<button className='btn btn-outline' >
<span>Volunteering opportunities</span>
<Image src={'/arr.svg'} alt="arrow" width={16} height={16} />
    </button>
 
</div>

</div>


</section>


    </div>

)
}

export default Banner