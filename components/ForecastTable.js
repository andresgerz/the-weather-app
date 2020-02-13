const ForecastTable = () => (
   
   
    <ul className="table-wrapper">
        <li className="today">
            <div className="top">1</div>
            <div className="bottom"></div>

        </li>
        <li className="days">
            <div className="top">2</div>
            <div className="bottom"></div>

        </li>
        <li className="days">
            <div className="top">3</div>
            <div className="bottom"></div>

        </li>
        <li className="days">
            <div className="top">4</div>
            <div className="bottom"></div>

        </li>
        <li className="days">
            <div className="top">5</div>
            <div className="bottom"></div>

        </li>
        <li className="days">
            <div className="top">6</div>
            <div className="bottom"></div>

        </li>
        <li className="days">
            <div className="top">7</div>
            <div className="bottom"></div>

        </li>
        
        
        <style jsx>{`

        
            .table-wrapper {
                width: 1140px;
                height: 284px;
                color: #FFF;
                font-size: 32px;
        
                
                /*CSS Flexbox*/
                display: flex;
                flex-flow: row wrap;
            }


            .today {
                width: 420px;
                
            }


            .days {
                width: 110px;
                height: 100%;
                
                
            }
            
            li {
                list-style: none;
                border: 0.1px solid #FFF;
            }


        `}    
        </style>
    </ul>
);

export default ForecastTable;