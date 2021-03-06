import Head from 'next/head'
import NavbarWeb from './NavbarWeb' 
import Footer from './Footer'

import './Layout.module.scss'

const Layout = (props) => (

  <>

    <Head>
      <title>The Weather App</title>  
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="csrf-token" content="{{ csrf_token() }}" />
      </Head>

    <NavbarWeb className="navbar" />
 
      {props.children}
    <Footer />

  </>

);

export default Layout;