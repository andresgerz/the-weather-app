import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'

const NavbarWeb = () => (

  
  <Navbar collapseOnSelect className="navbar-wrapper" expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">The Weather App</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">

      </Nav>
      <Nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/maps"><a>Maps</a></Link>
        <Link href="/alerts"><a>Alerts</a></Link>
        <Link href="/news"><a>News</a></Link>
        <Link href="/contact"><a>Contact</a></Link>

      </Nav>
    </Navbar.Collapse>

    <style jsx>{`
      
      .navbar-wrapper {
        height: 139;
      }
    
      a {
        margin-right: 40px;
        color: #FFF;
      }
    `}
    </style>

  </Navbar>
)

export default NavbarWeb;