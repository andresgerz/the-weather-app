import Head from 'next/head'
import NavbarWeb from '../components/NavbarWeb' 
import Footer from '../components/Footer'

const Layout = (props) => (

    <div>

        <Head>
        
            <title>The Weather App</title>
            
        </Head>

        <NavbarWeb className="navbar" />
        
        {props.children}

      

        <Footer />

        <style jsx>{`
        
           
        
        `}
        </style>
    </div>

);

export default Layout;