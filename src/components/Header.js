import {NavLink as Link} from 'react-router-dom';

const Header = ()=> {
    return (
        <nav className='Navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    )
}

export default Header
