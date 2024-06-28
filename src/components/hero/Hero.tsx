import Image from "next/image"
import '../../styles/hero/hero.css'
import { AboutBtn } from "@/utils/btn"
import Button from "../button/Button"
const Hero = () => {
return (
<section className="hero-section">

<div className="hero-intro">
<div>


<h6>Saving lives every day</h6>
<h2>Saving lives of cats and dogs across world</h2>
<p>We advocate for vulnerable animals, providing safety while promoting responsible pet ownership. We uplift both animals and communities.</p>
</div>
<div className="hero-btn">

<Button {...AboutBtn}/>
</div>
</div>

<div className="hero-image">
<Image src={'/cat.png'} className="hero-img" width={200} height={230} alt="hero-image" />
</div>
</section>
)
}

export default Hero