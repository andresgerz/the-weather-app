// Components
import Layout from '../src/components/Layout'
import ForecastTable from '../src/components/ForecastTable';
import Find from '../src/components/Find';

import '../styles/index.scss'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (

  <Layout>
    <div>
      <div className="wrapper-top">
        <Find />
      </div>
      <div className="wrapper-middle">
        <ForecastTable />
      </div>
      <div className="wrapper-bottom"></div>



    </div>

  </Layout>
);

export default Index;