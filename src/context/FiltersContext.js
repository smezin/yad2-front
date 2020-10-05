import React, { createContext, useReducer } from 'react';
import { filtersReducer, filtersReducerDefaultState } from 'reducers/filters';

export const FiltersContext = createContext();

const FiltersContextProvider = props => {
  const [filters, dispatch] = useReducer(filtersReducer, filtersReducerDefaultState)

  return (
    <FiltersContext.Provider value={{ filters, dispatch }}>
      {props.children}
    </FiltersContext.Provider>
  );
};

export default FiltersContextProvider;
