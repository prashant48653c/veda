import '@/styles/service/service.css'
import Heading from '../heading/Heading'
import { ServiceHead } from '@/types/heading.types'
const Service:React.FC = () => {
  return (
    <section className='section section-service'>
<Heading {...ServiceHead} />
    </section>
  )
}

export default Service