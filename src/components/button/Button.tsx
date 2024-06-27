import { BtnProp } from "@/types/btn.types"
import Image from "next/image"

 
const Button:React.FC<BtnProp> = ({text,pad}) => {
  return (
    <button style={{padding:pad?pad:'1rem 1.5rem'}} className="btn btn-fill">
    <span> {text}</span>
    <Image src={'/arrow.svg'} alt="arrow" width={16} height={16} />
    </button>
  )
}

export default Button