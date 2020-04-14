import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";
import { useState, useEffect } from 'react'


const ForecastTable = () => {
  
  const [dataCity, setDataCity ] = useState([{}])

  const days = [ 
    moment().day(3).locale("en").format("dddd"),
    moment().day(4).locale("en").format("dddd"),
    moment().day(5).locale("en").format("dddd"),
    moment().day(6).locale("en").format("dddd"),
    moment().day(7).locale("en").format("dddd"),
    moment().day(8).locale("en").format("dddd"),
    moment().day(9).locale("en").format("dddd")
  ]

  
  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + 'Posadas, AR' + '&units=metric&appid=6200f7fd2611fa3c695ade64a041d5f7')
      .then(res => res.json())
      .then(body => console.log(body.list))
      
  }, [])
    

  return(
    <ul className="table-wrapper">
      {days.map((day,index) => {
        return(
          <li className="days" key={index}>
            <div className="top"><p>{day}</p></div>
            <div className="bottom"></div>
          </li>
        )
      })
      }
    </ul>
  )

  
};


export default ForecastTable;