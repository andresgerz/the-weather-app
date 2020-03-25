import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment";

class ForecastTable extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      days: [ 
        [moment().day(0).locale("en").format("dddd"), "        " + moment().format("DD MMM")],
        moment().day(1).locale("en").format("dddd"),
        moment().day(2).locale("en").format("dddd"),
        moment().day(3).locale("en").format("dddd"),
        moment().day(4).locale("en").format("dddd")
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
              <div className="top">{day}</div>
              <div className="bottom"></div>
            </li>
          )
        })
      }
            
            
        <style jsx>{`

            
          .table-wrapper {
            width: 1140px;
            height: 284px;
            color: #FFF;
            font-size: 11px;
            
                    
            /*CSS Flexbox*/
            display: flex;
            align-content: flex-start;
            flex-wrap: wrap;
          }


          .days:first-child {
            width: 420px;
          }


          .days {
            width: 110px;
            height: 100%;
          }


          .top {
            height: 41px;
          }


          .bottom {
            height: 244px;

          }
        

          .table-wrapper .days:nth-of-type(2n) .top {
            background-color: #232530;
        }


          .table-wrapper .days:nth-of-type(2n + 1) .top {
            background-color: #2D303D;
          }


          .table-wrapper .days:nth-of-type(2n) .bottom {
            background-color: #262936;
          }


          .table-wrapper .days:nth-of-type(2n + 1) .bottom {
            background-color: #323544;
        }


          li {
            list-style: none;
            border: 0.1px solid #FFF;
        }


        `}    
        </style>
      </ul>



    )
  }   
  
};


export default ForecastTable;