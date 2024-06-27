import React from 'react'
import '@/styles/banner/banner.css'
const Banner = () => {
return (
<section className='section banner'>
<div className="banner-detail">
<h3>Get Involved</h3>
<p>Our work is made possible by the generosity of people like you, who have contributed to
our mission to improve the lives of all animals.</p>
<div className='flex'>
<button className='btn btn-outline' >
Adopt & Donate to help us
</button>
<button className='btn btn-outline' >
Volunteering opportunities
</button>
</div>

</div>
</section>
)
}

export default Banner