import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss'
import loadScripts from './utility/loadScripts'
import * as serviceWorker from './serviceWorker'
import AppRouter from './routers/AppRouter'

const renderApp= () => {
  ReactDOM.render(
//    <React.StrictMode>
      <AppRouter />
//    </React.StrictMode>
,
    document.getElementById('root')
  )
}

loadScripts(renderApp)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
