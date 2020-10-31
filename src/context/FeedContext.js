import React, { createContext, useReducer } from 'react';
import { feedReducer, feedReducerInitialState } from 'reducers/feed.reducer';

export const FeedContext = createContext();

const FeedContextProvider = props => {
  const [feed, dispatch] = useReducer(feedReducer, feedReducerInitialState)

  return (
    <FeedContext.Provider value={{ feed, dispatch }}>
      {props.children}
    </FeedContext.Provider>
  )
}

export default FeedContextProvider;
