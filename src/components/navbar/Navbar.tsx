import '../../styles/navbar/navbar.css'
import Links from './Links'
import NavButtons from './NavButtons'

const Navbar: React.FC = () => {
    return (
        <nav className='nav'>
            <div className='logo'>
<h1 className='logo-name'>Paw Prints</h1>
            </div>
          
            <Links />
            <NavButtons/>
        </nav>
    )
}

export default Navbar