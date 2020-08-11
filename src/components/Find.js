import React, { useState, useMemo, useContext } from 'react'
import { DataContext } from '../context/Context'


const Find = () => {

  const { dispatch } = useContext(DataContext);
  const [ city, setCity] = useState('');

  
  const handleSubmit = (e) => {
    dispatch({
      type: "UPDATE_CITY",
      city: city
    })
    setCity('');
    e.preventDefault();
  
  }


  const handleChange = (e) => {
    setCity(e.target.value);
   
  }  
  
  return(
    
    <div className="find-wrapper">
      <div className="item"> 
      
        <form className="form-wrapper" onSubmit={handleSubmit}>
          <input 
            className="form-display" 
            name="city" 
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="e.g.: Buenos Aires, AR" 
            autoFocus
          />
          <button className="form-button" type="submit">
            Find
          </button>
        </form>    
        
      </div>
    </div>
  
  )
};

export default Find;