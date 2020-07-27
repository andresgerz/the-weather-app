// Components
import Layout from '../src/components/Layout'
import ForecastTable from '../src/components/ForecastTable';
import Find from '../src/components/Find';
import News from '../src/components/News';

import '../styles/index.scss'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (

  <Layout>
    <div className="wrapper-top">
      <Find />
    </div>
    <div className="wrapper-middle">
      <ForecastTable />
      <News />
    </div>
  </Layout>
);

export default Index;