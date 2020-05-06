import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";
import { useState, useEffect } from 'react'
import axios from 'axios'

const days = [ 
  moment().day(3).locale("en").format("dddd"),
  moment().day(4).locale("en").format("dddd"),
  moment().day(5).locale("en").format("dddd"),
  moment().day(6).locale("en").format("dddd"),
  moment().day(7).locale("en").format("dddd")
]


const ForecastTable = () => {
  
  const [data, setData ] = useState({datas: []});
  

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=' + 'Posadas, AR' + '&units=metric&appid=6200f7fd2611fa3c695ade64a041d5f7');
      
      setData(result.data);
      console.log(result.data.list);  
      let aux = [];
      result.data.list.map((objectDay, nro) => {
        if (String(objectDay.dt_txt).split(" ")[1] === "03:00:00") {
          
            //console.log(objectDay.main);   
          }
        })
        console.log(data);
      }
      /* .catch(error => {console.log(error.messsage)})  
      } */ 
      fetchData();
  }, [])
  
  
  return(
    <ul className="table-wrapper">
    {
      days.map((day,index) => (
        <li className="days" key={String(index)}>
          <div className="top"><p>{day}</p></div>
          <div className="bottom"></div>
        
        </li>
        )
      )
      }
    </ul>
  )

  
}


export default ForecastTable;