import '@/styles/service/service.css'
import Heading from '../heading/Heading'
import { ServiceHead } from '@/utils/heading'
import Image from 'next/image'
import Button from '../button/Button'
import { serviceData } from '@/utils/service'
import { ServiceBtn } from '@/utils/btn'
const Service: React.FC = () => {


  return (
    <section className='section section-service'>
      <Heading {...ServiceHead} />
      <div className="services flex">

{
  serviceData.map((item,i)=>{
    return(
      <article key={i} className='service' >
      <Image src={item.img} className='service-img' alt='service-img' width={200} height={200} />

      <div className="service-stat">
        <div className='stat flex'>
        <p> <span>GOAL</span> : <span>$</span>1340</p>
          <p><span>RAISED</span> : <span>$</span>800</p>
        </div>
        <div className="graph flex">
         
        </div>

      </div>

      <div className="service-extras flex f-col">
        <h5>{item.head}</h5>
        <p>{item.desc}</p>
        <div className='flex'>
          <p>View details</p>
          <Image src={'/arr.svg'} alt='arrow' width={16} height={16}/>
        </div>
      </div>
    </article>
    )
  })
}
    

      

      </div>
      <Button {...ServiceBtn} />
    </section>
  )
}

export default Service