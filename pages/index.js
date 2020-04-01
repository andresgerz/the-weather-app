// Components
import Layout from '../components/Layout'
import ForecastTable from '../components/ForecastTable';
import Find from '../components/Find';

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
 
    <style jsx>{`
      .wrapper-top {
                    
          height: 350px;
          background-color: #585B6D;
          
        }
        
        .wrapper-middle {
          
          height: 685.5px;
          background-color: #1D202A;
      }

      .wrapper-bottom {
          
          height: 300px;
          background-color: #262936;
      }
    `}  
    </style>
  </Layout>
);

export default Index;