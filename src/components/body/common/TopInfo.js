import React, { useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import fetchFromResource from 'utility/fetchFromResource'
import getSubPath from 'utility/getSubPath'
import icons from 'icons'

const TopInfo = () => {
    const [category, setCategory] = useState('forsale')
    const location = useLocation()
    const pathname = location.pathname || location.location.pathname
    const categoryFromPath = getSubPath(pathname, '/realestate')
    const allCategories = fetchFromResource('object', 'realestateSearchBar', 'header', 'headerLinks')
    const allCategoriesNames = Object.keys(allCategories).map( (category) => category)
    
    useEffect( () => {
        allCategoriesNames.includes(categoryFromPath) && setCategory(categoryFromPath)
    },[location, allCategoriesNames, categoryFromPath])
    
    const categoryLocalName = fetchFromResource('string', 'topInfo', 'realestate', 'subCategories', category, 'localName')
    const homePage = fetchFromResource('string', 'topInfo', 'realestate', 'localName')
    const delimiter = <span className="top-info__nav__delimiter">&nbsp;&nbsp;{' > '}&nbsp;&nbsp;</span>
    const accessibility = fetchFromResource('string', 'topInfo', 'accessibility', 'localName')
    return (
        <div className="top-info">
            <div className="top-info__right">
                {homePage}{delimiter}{categoryLocalName}
            </div>
            <div className="top-info__accessibility">
                {accessibility} <img src={icons.accessibility} alt=""/>
            </div>
        </div>
    )
}

export default TopInfo