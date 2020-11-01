import React, { createContext, useReducer } from 'react';
import { userReducer, userReducerInitialState } from 'reducers/user.reducer';

export const UserContext = createContext();

const UserContextProvider = props => {
const [user, dispatch] = useReducer(userReducer, userReducerInitialState)

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;
