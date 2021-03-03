import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import Cloud from '../weather-icons-master/svg/wi-cloud.svg';

import './NavbarWeb.module.scss'

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
            <NavDropdown title="Info" id="collasible-nav-dropdown">
              <Link href="/events"><NavDropdown.Item className='text-dark' href="#action/3.1">Events</NavDropdown.Item></Link>
              <Link href="/events"><NavDropdown.Item className='text-dark' href="#action/3.2">Radar</NavDropdown.Item></Link>
              <Link href="/events"><NavDropdown.Item className='text-dark' href="#action/3.3">Satellite</NavDropdown.Item></Link>
              <Link href="/events"><NavDropdown.Item className='text-dark' href="#action/3.3">Alerts</NavDropdown.Item></Link>
              <Link href="/events"><NavDropdown.Item className='text-dark' href="#action/3.3">Climatology</NavDropdown.Item></Link>
              <Link href="/events"><NavDropdown.Item className='text-dark' href="#action/3.3">Space Weather</NavDropdown.Item></Link>
              <Link href="/events"><NavDropdown.Item className='text-dark' href="#action/3.3">eathquera</NavDropdown.Item></Link>
            </NavDropdown>
            <Link href="/contact"><a>Login</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </div>  
)

export default NavbarWeb;