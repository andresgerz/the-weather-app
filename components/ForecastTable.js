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
            
            
        <style jsx>{`

            
          .table-wrapper {
            width: 1140px;
            height: 284px;
            color: #FFF;
            font-size: 11px;
            margin: auto;
            padding: 0;
            border-collapse: collapse;
            border-radius: 10px;
            overflow: hidden;
                    
            /*CSS Flexbox*/
            display: flex;
            align-content: flex-start;
            flex-wrap: wrap;
          }


          .days:first-child {
            width: 420px;
          }


          .days {
            width: 120px;
            height: 100%;
          }


          .top {
            height: 41px;
            padding-top: 14px;
          }


          .bottom {
            height: 244px;

          }
          
          
          .top p {
            margin: 0px;
            width: 80px;
          }


          .top:nth-of-type(2) p {
            float: right;
          }
           

          .days:nth-of-type(n+2) .top {
            text-align: center;
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