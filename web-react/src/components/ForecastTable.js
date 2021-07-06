import React, { Component } from "react";
import moment from "moment";
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { DataContext } from '../context/Context'
import { 
  Cloud, 
  CloudSun, 
  BrightnessHigh, 
  Hurricane, 
  TropicalStorm,
  Tornado,
  Tsunami,
  CloudLightningRain,
  CloudLightning,
  CloudHail,
  CloudSnow,
  Wind,
  CloudSleet
} from 'react-bootstrap-icons';

import './ForecastTable.module.scss'

const BootstrapIcon = ({icon, size, color}) => {
                                                                                 switch(icon) {
                                                                               
    case 'Thunderstorms':
    case 'Thundershowers': 
    case 'Storm':
      return <CloudLightningRain
      size={size} color={color} />;
    case 'Lightning':
      return <CloudLightning
      size={size} color={color} />;
    case 'Hail':
      return <CloudHail
      size={size} color={color} />;
    case 'Blowing Snow': 
    case 'Blizzard': 
    case 'Snowdrift': 
    case 'Snowstorm':
      return <>
      <Wind
      size={size} color={color} />
      <CloudSnow
      size={size} color={color} />
      </> ;
    case 'Snow Showers':
    case 'Flurries':
    case 'Snow':
    case 'Heavy Snow':
    case 'Snowfall':
    case 'Light Snow':  
      return <CloudSnow
      size={size} color={color} />;
    case 'Sleet':  
      return <CloudSleet
      size={size} color={color} />;
    case 'Cloudy':
    case 'Mostly Cloudy': 
      return <Cloud size={size} color={color} />;
    case 'Sunny': 
    case 'Periods':
    case 'Partly Cloudy': 
    case 'Partly Bright': 
    case 'Mild':
      return <CloudSun size={size} color={color} />;
    case 'Bright':
    case 'Sunny':
    case 'Fair':
    case 'Fine': 
    case 'Clear':
      return <BrightnessHigh size={size} color={color} />;
    case 'hurricane':
      return <Hurricane size={size} color={color} />;
    case 'tropical-storm':
      return <TropicalStorm size={size} color={color} />;
    case 'tornado':
      return <Tornado size={size} color={color} />;
    case 'tsunami':
      return <Tsunami size={size} color={color} />;
    default:
      return null;
  }
}

const ForecastTable = ({}) => {

  const { state } = useContext(DataContext);
  const [datas, setDatas] = useState([]);
  const [city, setCity] = useState('');

  
  const convertDate = (date) => {
    return moment.parseZone(date).format("dddd");
  }
  
  useEffect( () => {
    
    axios.get(`http://weather-api.lndo.site/api/weather-data/${state.city}`)
      .then(result => {
        console.log(result);
        let dataCity = result.data.city; 

        setCity(`${dataCity.cityName}, ${dataCity.member.memName}`);
        setDatas(dataCity.forecast.forecastDay);
        })
        .catch(err => console.log(err));
        
      }, [state.city])
      
      
      return(
        <ul className="table-container">
        {
          datas.map((day,index) => {
            
          if (index === 0) {
            return(
              <li className="days" key={String(index)}>
                <div className="top">
                <div className="today-date">{convertDate(day.forecastDate)}</div>
                  <div className="today-day">{moment.parseZone(day.forecastDate).format("D MMM")}</div>
                </div>
                
                <div className="bottom">
                  <div className="today-data">
                    <p className="city">{city}</p>
                    <h2>{`°C`}</h2>
                    <p>{" hPa"}</p>
                    <p>{" %"}</p>
                    <p>{" km/h"}</p>  
                  </div>
                  <div className="icon-today-wrapper">
                    <BootstrapIcon
                      icon={day.weather}
                      size={84}
                      color={'#00a6d4'}
                    />
                  </div>
                </div>
              
              </li>)
            
          } else {  
              return (
                <li className="days" key={String(index)}>
                  <div className="top"><p>{convertDate(day.forecastDate)}</p></div>
                  <div className="bottom">
                    <div className="icons-week-wrapper">
                      <BootstrapIcon
                        icon={day.weather}
                        size={42}
                        color={'#00a6d4'}
                      />
                    </div>
                    <div className="temperatures-week">
                      <p className="temperatures-max">{day.maxTemp + " °C"}</p>
                      <p className="temperatures-min">{day.minTemp + " °C"}</p>
                    </div>
                  </div>
                </li>)
        }
      })
      }
    </ul>
  )
}

export default ForecastTable;