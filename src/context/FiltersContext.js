import React, { createContext, useReducer, useEffect } from 'react';
import { filtersReducer } from '../reducers/filters';

export const FiltersContext = createContext();

const FiltersContextProvider = props => {
  const [books, dispatch] = useReducer(filtersReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  })
  
  return (
    <FiltersContext.Provider value={{ books, dispatch }}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
