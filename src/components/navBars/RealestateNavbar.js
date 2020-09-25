import React, { useState } from 'react'
import LinkedText from '../../entities/LinkedText'
import fetchFromResource from '../../utility/fetchFromResource'
import icons from '../../icons'

const RealestateNavbar = () => {
    const [pickedItem, setPickedItem] = useState('forsale')
    const rightSideItems = fetchFromResource('navbars', 'realestate', 'rightSide') || '' // (||'') error protection 
    const leftSideItems = fetchFromResource('navbars', 'realestate', 'leftSide') || ''

    const rightSide = Object.keys(rightSideItems).map((item) => {
            return new LinkedText(rightSideItems[item]['path'], item, rightSideItems[item]['localName'])
    })
    const leftSide = Object.keys(leftSideItems).map((item) => {
            return new LinkedText(leftSideItems[item]['path'], item, leftSideItems[item]['localName'])
    })
    const onClick = (e, pickedItem) => {
        setPickedItem(pickedItem.name)  
        console.log(pickedItem.path)
    }
    
    return (
        <div className="realestate-navbar">
            <div className="realestate-navbar__right">
                <div className="realestate-navbar__right-spacer"/>
                {
                    rightSide.map((item) => (
                        <div key={item.name} className={`navbar-item__right ${pickedItem===item.name?"picked":""}`}
                        onClick={(e) => onClick(e, item)}>
                            {item.localName}
                        </div>
                    ))
                } 
            </div>
            <div className="realestate-navbar__left">
                    {
                        leftSide.map ((item) => (
                            <div key={item.name} className="navbar-item__left">
                                <img src={icons[item.name]} alt=""/> {item.localName}
                            </div>
                        ))
                    }
                    <div className="realestate-navbar__left-spacer"/>
                </div>
        </div>
    )
}

export default RealestateNavbar