import React from 'react'
import '@/styles/footer/footer.css'
import { footerData } from '@/utils/footer'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
return (
<footer className='section footer'>
<div className="outro">
<h2>Pawprints</h2>
</div>

<div className="link-boxs">
{
footerData.map((item,i)=>{
return(
  <div key={i} className='link-box'>
  <h6>{item.head}</h6>
  <div className="f-links">
    {
      item.links.map((link,j)=>{
        return ( <a className='f-link' key={j} href={'/'}  >{link}</a>)
      })
    }


    
  </div>
  </div>
)
})
}
<div className="link-box">
      <h6>SOCIAL MEDIA</h6>
      <p>Follow us on social media to find out
      the latest updates on our progress.</p>
      <div className="flex">
      <Image src={'/twitter.svg'} width={25} height={25} alt='social-icons' />
      <Image src={'/facebook.svg'} width={25} height={25} alt='social-icons' />
      <Image src={'/insta.svg'} width={25} height={25} alt='social-icons' />

      </div>
    </div>
</div>

<hr />
<div className="credits">
 
    <p>Copyright © 2024 fourpaws. All Rights Reserved</p>
    <div>
      <p>Terms of Service</p>
      <p>Privacy Policy</p>
      <p>Security</p>
      <p>Sitemap</p>



    </div>
   
</div>

</footer>
)
}

export default Footer