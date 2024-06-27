import React from 'react'
import '@/styles/banner/banner.css'

const Poster = () => {
  return (
    <section className='section section-poster' >
  <div className='poster '>
        <div className='poster-text'>
        <h5>Join our newsletter</h5>
   <p>Pawprint that has been for pets.</p>
        </div>
        <div className='poster-form' >
            <input type="email" placeholder='Enter your email' className="input" />
            <button className='btn btn-fill' >Subscribe</button>
        </div>
    </div>
    </section>
  
  )
}

export default Poster