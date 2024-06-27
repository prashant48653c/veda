import { HeadingProp } from "@/types/heading.types"

 
const Heading:React.FC<HeadingProp> = ({head,semiHead,desc}) => {
  return (
    <div className='heading'>
        <h6>{semiHead}</h6>
        <h3>{head}</h3>
        <p>{desc}</p>
    </div>
  )
}

export default Heading