import { Nav, Navbar } from 'react-bootstrap'
import Link from 'next/link'
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
            <Link href="/maps"><a>Maps</a></Link>
            <Link href="/alerts"><a>Alerts</a></Link>
            <Link href="/news"><a>News</a></Link>
            <Link href="/contact"><a>Contact</a></Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

    <style jsx>{`
    
      .navbar-wrapper {
        width: 100%;
        height: 139px;
        background-color: #161d26;
        color: #FFF;
        padding: 26px 0 0 178px;
      }


      .navbar-icon-wrapper {
        width: 176px;
        float: left;
      }
      

      .navbar-icon {
        width: 79px;
        fill: #00a6d4;
        float: left;
        padding-top: 4.5px;
      }


      .navbar-icon-title {
        float: right;
        padding-top: 25px;
      }


      .navbar-icon-title h1 {
        font-size: 12px;
        font-weight: bold;
      }
  
       
      .navbar-icon-title p {
        font-size: 8px;
      }


      .navbar-options {
        width: 420px;
        float: right;
        padding-top: 20px;
      }
      
      .navbar-wrapper a:first-child {
        width: 91px;
        height: 30px; 
        color: #00a6d4;
        font-size: 11px;
        border: 2px solid #00a6d4;
        border-radius: 15px;
        padding: 6px 25px 0 25px;
        text-align: center;
      }


      .navbar-wrapper a {
        margin-right: 40px;
        color: #fff;
        font-size: 11px;
        font-weight: bold;
        padding-top: 9px;
      }
    `}
    </style>

  </div>  
)

export default NavbarWeb;