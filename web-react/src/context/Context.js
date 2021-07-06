import React, { useReducer } from 'react'


let reducer = (state, action) => {
  switch(action.type) {
    case "UPDATE_CITY":
      return {
        city: action.city
      };
    default:
      return state;
    }
};

const initialState = {
  city: '294'
}

const DataContext = React.createContext(initialState);


function DataProvider(props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <DataContext.Provider value={{state, dispatch}}>
      {props.children}
    </DataContext.Provider>
  )
}

export { DataContext, DataProvider };