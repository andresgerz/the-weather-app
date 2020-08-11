import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import Cloud from '../weather-icons-master/svg/wi-cloud.svg';

const NavbarWeb = () => (

  <div className="navbar-wrapper">
    <div className="navbar-icon-wrapper">
      <div className="navbar-icon">
        <Cloud />
      </div>
      <div className="navbar-icon-title">
        <h1>The weather app</h1>
        <p>tagline goes here</p>
      </div>
    </div>
    <div className="navbar-options">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          <Nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>  
)

export default NavbarWeb;