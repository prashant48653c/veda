import '../../styles/navbar/navbar.css'
import Links from './Links'
import MobNav from './MobNav';
import NavButtons from './NavButtons'
import { MdOutlineMenu } from "react-icons/md";
const Navbar: React.FC = () => {
    return (
        <nav className='nav'>
            <div className='logo-nav'>
                <h1 className='logo-name'>Paw Prints</h1>
            

            <Links />
          
            
            </div>
            <MobNav/>
            <NavButtons />
        </nav>
    )
}

export default Navbar