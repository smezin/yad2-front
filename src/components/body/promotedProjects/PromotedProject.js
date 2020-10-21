import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import FavoriteHeart from '../realestate/feed/FavoriteHeart'

const PromotedProject = (props) => {
    const { projectItem } = props
    const street = projectItem.properties.location.split(',')[0]
    const city = projectItem.properties.location.split(',')[1] || ''
    const imgPath = projectItem.images[0]
    const text = projectItem.properties.text
    const ribbonLocalName = projectItem.properties.ribbonText || fetchFromResource('string', 'promotedProjects', 'defaultRibbonText', 'localName')
    
    return (
        <div className="promoted-project">
            <div className="promoted-project__image-container">
                <img src={imgPath} alt="project-pic"/>
                <FavoriteHeart favoriteItem={projectItem} />
            </div>           
            <div className="ribbon">{ribbonLocalName}</div>
            <div className="promoted-project__description">
                <div className="promoted-project__address">{street}</div> 
                <div className="promoted-project__city">{city}</div> 
                <div className="promoted-project__text">{text}</div>   
            </div>                 
        </div>
    )
}

export default PromotedProject