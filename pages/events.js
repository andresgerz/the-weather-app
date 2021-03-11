import Layout from '../src/components/Layout'
import { useState, useEffect } from 'react'
import axios from 'axios'
import FormEvent from '../src/components/FormEvent'

const Events = () => {
  const [urlImg, setUrlImg] = useState('');

/* 
  useEffect( () => {
    
    axios.get('http://weather-api.lndo.site/api/weather-data')
      .then(result => {
        console.log(result);
        let dataCity = result.data.city; 

        setCity(`${dataCity.cityName}, ${dataCity.member.memName}`);
        setDatas(dataCity.forecast.forecastDay);
        })
        .catch(err => console.log(err));
        
      }, [state.city])
       */
 

  return (
    <Layout>
      <div>
        <h1>Events</h1>
        <FormEvent />
      </div>
    </Layout>
  )
  }

export default Events