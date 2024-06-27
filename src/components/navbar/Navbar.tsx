import '../../styles/navbar/navbar.css'
import Links from './Links'
import NavButtons from './NavButtons'

const Navbar: React.FC = () => {
    return (
        <nav className='nav'>
            <div className='logo-nav'>
                <h1 className='logo-name'>Paw Prints</h1>
            

            <Links />
            </div>
            <NavButtons />
        </nav>
    )
}

export default Navbar