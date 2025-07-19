import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav style={{backgroundColor: 'blue', 
        borderRadius: '25px',
         width: '90%',
         alignContent: 'center',
         alignItems: 'center',
         display: 'flex',
         justifyContent: 'flex-end',
         gap: '40px',
         margin:  'auto',
         padding: '10px'}}>
            <Link to="/" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Home</Link>
            <Link to="/about" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>About</Link>
            <Link to="/projects" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Projects</Link>
            <Link to="/services" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Services</Link>
            <Link to="/contact" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>Contact</Link>
        </nav>
    );
        }

export default Navbar;