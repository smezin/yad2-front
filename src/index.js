import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss'
import MainMenu from './components/mainMenu/MainMenu'
import RealestateNavbar from './components/navBars/RealestateNavbar'
import * as serviceWorker from './serviceWorker'


ReactDOM.render(
  <React.StrictMode>
    <MainMenu />  
    <RealestateNavbar />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// <NavItemDropdownMenu items={fetchFromResource('mainMenu', 'dropdownMenus', 'realestate')}/>
// <NavItem categories={fetchFromResource('mainMenu', 'dropdownMenus')}/>