import React, { createContext, useReducer } from 'react';
import { authReducer, userReducerInitialState } from 'reducers/auth';

export const AuthContext = createContext();

const AuthContextProvider = props => {
const [auth, dispatch] = useReducer(authReducer, userReducerInitialState)

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;
