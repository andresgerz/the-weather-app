// Components
import Layout from '../src/components/Layout'
import ForecastTable from '../src/components/ForecastTable';
import Find from '../src/components/Find';
import News from '../src/components/News';
import { DataProvider } from '../src/context/Context'

import '../styles/index.scss'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (

  <Layout>
    <DataProvider>
      <div className="wrapper-top">
        <Find />
      </div>
      <div className="wrapper-middle">
        <ForecastTable />
        <News />
      </div>
    </DataProvider>    
  </Layout>
);

export default Index;