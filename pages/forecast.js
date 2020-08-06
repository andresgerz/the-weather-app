import Layout from '../src/components/Layout'
import ForecastTable from '../src/components/ForecastTable'


import '../styles/index.scss'

const Forecast = () => (

    <Layout>
        <div id="forecast-container">
          <ForecastTable />
        </div>
      
    </Layout>
);

export default Forecast