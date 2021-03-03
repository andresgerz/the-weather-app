import Head from 'next/head'
import NavbarWeb from './NavbarWeb' 
import Footer from './Footer'

import './Layout.module.scss'

const Layout = (props) => (

  <>

    <Head>
      <title>The Weather App</title>  
    </Head>

    <NavbarWeb className="navbar" />
 
      {props.children}
    <Footer />

  </>

);

export default Layout;