import { BtnProp } from "@/types/btn.types"
import Image from "next/image"

 
const Button:React.FC<BtnProp> = ({text}) => {
  return (
    <button className="btn btn-fill">
    <span> {text}</span>
    <Image src={'/arrow.svg'} alt="arrow" width={16} height={16} />
    </button>
  )
}

export default Button