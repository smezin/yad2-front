import React, { createContext, useReducer } from 'react';
import { itemReducer, itemReducerInitialState } from 'reducers/item.reducers';

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [item, dispatch] = useReducer(itemReducer, itemReducerInitialState)

  return (
    <ItemContext.Provider value={{ item, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  )
}

export default ItemContextProvider;
