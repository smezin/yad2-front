import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import SearchBar from './searchBar/SearchBar'
import getSubPath from 'utility/getSubPath'

const RealestateContent = () => {
    const mainCategory = '/realestate'
    const location = useLocation();
    const currentPath = location.pathname || location.location.pathname
    const urlPath = getSubPath(currentPath, mainCategory)
   
    return (
        <div className="realestate-content">
            <SearchBar />
        </div>
    )
}

export default RealestateContent