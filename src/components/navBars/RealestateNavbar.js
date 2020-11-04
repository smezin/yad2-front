import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LinkedText from 'entities/LinkedText'
import fetchFromResource from 'utility/fetchFromResource'
import getSubPath from 'utility/getSubPath'
import icons from 'icons'

const RealestateNavbar = () => {
    const [category, setCategory] = useState('/forsale')
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const categoryFromPath = getSubPath(pathname, '/realestate')
    const allCategories = fetchFromResource('object', 'realestateSearchBar', 'header', 'headerLinks')
    const allCategoriesNames = Object.keys(allCategories).map( (category) => category)
    useEffect( () => {
        allCategoriesNames.includes(categoryFromPath) && setCategory(categoryFromPath)
    },[location, allCategoriesNames, categoryFromPath])
    const rightSideItems = fetchFromResource('object', 'navbars', 'realestate', 'rightSide') 
    const leftSideItems = fetchFromResource('object', 'navbars', 'realestate', 'leftSide') 

    const rightSide = Object.keys(rightSideItems).map((item) => {
            return new LinkedText(rightSideItems[item]['path'], item, rightSideItems[item]['localName'])
    })
    
    const leftSide = Object.keys(leftSideItems).map((item) => {
            return new LinkedText(leftSideItems[item]['path'], item, leftSideItems[item]['localName'])
    })
    const onClick = (e, pickedItem) => {
        
    }
    console.log(leftSideItems)
    return (
        <div className="realestate-navbar">
            <div className="realestate-navbar__right">
                <div className="realestate-navbar__right-spacer"/>
                {
                    rightSide.map((item) => (                       
                        <Link to={item.path} key={item.name} className={`navbar-item__right ${category===item.name?"picked":""}`}
                        onClick={(e) => onClick(e, item)}>
                            {item.localName}
                        </Link>                   
                    ))
                } 
            </div>
            <div className="realestate-navbar__left">
                    {
                        leftSide.map ((item) => (
                            <Link to={item.path} key={item.name} className="navbar-item__left">
                                <img src={icons[item.name]} alt=""/> {item.localName}
                            </Link>
                        ))
                    }
                    <div className="realestate-navbar__left-spacer"/>
                </div>
        </div>
    )
}

export default RealestateNavbar