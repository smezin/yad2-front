import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss'
import MainMenu from './components/mainMenu/MainMenu'
import * as serviceWorker from './serviceWorker'
import fetchFromResource from './utility/fetchFromResource'


fetchFromResource('mainMenu','dropdownMenus','realestate','forsale')
ReactDOM.render(
  <React.StrictMode>
    <MainMenu />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// <NavItemDropdownMenu items={fetchFromResource('mainMenu', 'dropdownMenus', 'realestate')}/>
// <NavItem categories={fetchFromResource('mainMenu', 'dropdownMenus')}/>