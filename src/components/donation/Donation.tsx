import Image from 'next/image'
import '@/styles/donation/donation.css'
import Button from '../button/Button'
import { AmountBtn } from '@/utils/btn'
const Donation: React.FC = () => {
return (
<section className='section donation'>

<div className="flex donation-flex ">
<div className="donation-image">
<Image src={'/donation.png'} alt='donation-image' className='donation-img' width={300} height={400} />
</div>
<div className="donation-detail flex  ">
    <div>
    <h4>A Help to those who need it</h4>
<h3>Transform lives with donations</h3>
<p>Your donation can save lives. Help us provide care and find loving homes for rescued animals. Every contribution counts. Donate now!</p>
    </div>

<div className='graph-box' >
<div className="graph flex">

</div>
<div className='stat flex'>
<p> <span>GOAL</span> : <span>$</span>1340</p>
<p><span>RAISED</span> : <span>$</span>800</p>
</div>
<div className="input-field flex ">
<p>$</p>
<input type="text" placeholder='10.00' />
</div>

<div className='amounts'>
<div className="amount">
$ 10.00
</div>
<div className="amount">
$ 25.00
</div><div className="amount">
$ 50.00
</div><div className="amount">
$ 100.00
</div><div className="amount">
$ 250.00
</div>
</div>

</div>

<Button {...AmountBtn} />

</div>
</div>
</section>
)
}

export default Donation