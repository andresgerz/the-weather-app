import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";

class ForecastTable extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      days: [ 
        [moment().day(3).locale("en").format("dddd"), moment().format("DD MMM")],
        [moment().day(4).locale("en").format("dddd"),],
        [moment().day(5).locale("en").format("dddd"),],
        [moment().day(6).locale("en").format("dddd"),],
        [moment().day(7).locale("en").format("dddd"),],
        [moment().day(8).locale("en").format("dddd"),],
        [moment().day(9).locale("en").format("dddd"),]
     ],
      dateToday: moment().day(0)
    }

  }



  render() {
    return(

      <ul className="table-wrapper">
        {this.state.days.map((day,index) => {
          return(
            <li className="days">
              <div className="top"><p>{day[0]}</p><p>{day[1]}</p></div>
              <div className="bottom"></div>
            </li>
          )
        })
       }
      </ul>



    )
  }   
  
};


export default ForecastTable;