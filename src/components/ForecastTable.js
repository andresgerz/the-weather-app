import React, { Component } from "react";
import moment from "moment";
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { DataContext } from '../context/Context'


import { isArray } from 'util';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faSun,
  faMoon,
  faCloud,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faCloudMoon,
  faCloudMoonRain,
  faPooStorm,
  faCloudMeatball

} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type } from "os";
import { createContext } from "vm";

library.add(
  fab,
  faSun,
  faMoon,
  faCloud,
  faCloudRain,
  faCloudSun,
  faCloudSunRain,
  faCloudShowersHeavy,
  faCloudMoon,
  faCloudMoonRain,
  faPooStorm,
  faCloudMeatball
)


const days = [ 
  [moment().day(0).locale("en").format("dddd"), 
  moment().day(0).locale("en").format("DD MMM")],
  moment().day(1).locale("en").format("dddd"),
  moment().day(2).locale("en").format("dddd"),
  moment().day(3).locale("en").format("dddd"),
  moment().day(4).locale("en").format("dddd")
]


const ForecastTable = () => {

  const { state } = useContext(DataContext);
  const [datas, setDatas] = useState([]);
  const [city, setCity] = useState('');
  

  const convertToIcons = (id) => {
  
    const icons = {
      "clear sky": faSun,
      "scattered clouds": faSun,
      "0": faMoon,
      "overcast clouds": faCloud,
      "light rain": faCloudRain,
      "moderate rain": faCloudRain,
      "broken clouds": faCloudSun,
      "few clouds": faCloudSun,
      "5": faCloudSunRain,
      "7": faCloudShowersHeavy,
      "8": faCloudMoon,
      "9": faCloudMoonRain,
      "10": faPooStorm,
      "snow": faCloudMeatball,
      "light snow": faCloudMeatball
    }
  
    return icons[id];
  }
  

  useEffect( () => {
    
    const URL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const KEY = '&units=metric&appid=6200f7fd2611fa3c695ade64a041d5f7';
    
    axios.get(URL + state.city + KEY)
      .then(result => {

        setCity(result.data.city.name + ", " + result.data.city.country)
        setDatas(result.data.list.filter(objectDay => {
          return String(objectDay.dt_txt).split(" ")[1] === "12:00:00";
          }))

        }
        )
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
                <div className="today-date">{days[index][0]}</div>
                  <div className="today-day">{days[index][1]}</div>
                </div>
                
                <div className="bottom">
                  <div className="today-data">
                    <p className="city">{city}</p>
                    <h1>{day.main.temp.toFixed(1) + " °C"}</h1>
                    <p>{day.main.pressure + " hPa"}</p>
                    <p>{day.main.humidity + " %"}</p>
                    <p>{day.wind.speed.toFixed(1) + " km/h"}</p>  
                  </div>
                  <div className="icon-today-wrapper">
                    <FontAwesomeIcon
                      icon={convertToIcons(day.weather[0].description)}
                      size="1x"
                      className="icon-today"
                    />
                  </div>
                </div>
              
              </li>)
            
          } else {  
             return (
               <li className="days" key={String(index)}>
                <div className="top"><p>{days[index]}</p></div>
                <div className="bottom">
                  <div className="icons-week-wrapper">
                    <FontAwesomeIcon
                      icon={convertToIcons(day.weather[0].description)}
                      size="1x"
                      className="icons-week"
                    />
                  </div>
                  <div className="temperatures-week">
                    <p className="temperatures-max">{day.main.temp_max.toFixed(1) + " °C"}</p>
                    <p className="temperatures-min">{day.main.temp_min.toFixed(1) + " °C"}</p>
                  </div>
                </div>
              </li>)
        }
      }
      )
      }
    </ul>
  )

  
}


export default ForecastTable;