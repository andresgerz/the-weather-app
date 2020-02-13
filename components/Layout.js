import Head from 'next/head'
import NavbarWeb from '../components/NavbarWeb' 


const Layout = (props) => (

    <div>

        <Head>
        
            <title>The Weather App</title>
            
        </Head>

        <NavbarWeb />
        
        {props.children}
    </div>

);

export default Layout;