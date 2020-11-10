import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import FavoriteHeart from '../realestate/feed/FavoriteHeart'

const PromotedProject = (props) => {
    const { projectItem } = props
    if (!projectItem || !projectItem.location || !projectItem.text) {
        return null
    }
    const street = projectItem.location.split(',')[0]
    const city = projectItem.location.split(',')[1] || ''
    const imgUrl = projectItem.imageUrls[0]
    const text = projectItem.text
    const ribbonLocalName = projectItem.ribbonText || fetchFromResource('string', 'promotedProjects', 'defaultRibbonText', 'localName')
    
    return (
        <div className="promoted-project">
            <div className="promoted-project__image-container">
                <img src={imgUrl} alt="project-pic"/>
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