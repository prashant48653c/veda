import { EventHead } from '@/utils/heading'
import Heading from '../heading/Heading'
 import '@/styles/event/event.css'
import { EventData } from '@/utils/event'
import Button from '../button/Button'
import { EventBtn } from '@/utils/btn'
const Events = () => {
  return (
    <section className='events-section section'>
        <Heading {...EventHead} />
        <div className="events flex">
{
  EventData.map((item,i)=>{
    return(
      <article key={i} className="event">
      <div className="day f-col">
        <h5>{item.date}</h5>
        <p>June</p>
      </div>
      <div className="event-detail f-col">
        <h4>{item.head}</h4>
        <div>
  
        <p>07:00 AM - 10:00 PM</p>
        <p>Kathmandu</p>
        </div>
      </div>
            </article>
    )
  })
}
       

        </div>
        <Button {...EventBtn}/>
    </section>
  )
}

export default Events