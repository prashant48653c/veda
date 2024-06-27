import React from 'react'
import '@/styles/footer/footer.css'
import { footerData } from '@/utils/footer'
import Link from 'next/link'

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
            <div className="links">
              {
                item.links.map((link,j)=>{
                  return  <Link className='link' key={j} href={''}  >{link}</Link>
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
                  <div>s</div>
                  <div>s</div>
                  <div>s</div>

                </div>
              </div>
       </div>

    </footer>
  )
}

export default Footer