import Head from 'next/head'
import NavbarWeb from './NavbarWeb' 
import Footer from './Footer'

const Layout = (props) => (

  <div>

    <Head>
      <title>The Weather App</title>  
    </Head>

    <NavbarWeb className="navbar" />
        
      {props.children}
      <Footer />

  </div>

);

export default Layout;