import React, { useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const PromotedProject = (props) => {
    const { projectItem } = props
    const [isFavorite, setIsFavorite] = useState(false)
    const street = projectItem.properties.location.split(',')[0]
    const city = projectItem.properties.location.split(',')[1] || ''
    const imgPath = projectItem.images[0]
    const text = projectItem.properties.text
    const ribbonLocalName = projectItem.properties.ribbonText || fetchFromResource('string', 'promotedProjects', 'defaultRibbonText', 'localName')
    const heartClicked = () => {
        setIsFavorite(!isFavorite)
        console.log('add/remove from fav list')
    }
    return (
        <div className="promoted-project">
            <div className="promoted-project__image-container">
                <img src={imgPath} alt="project-pic"/>
                {
                    isFavorite ? 
                    <span role="img" aria-label="orange-heart" className="symbol__heart-full" onClick={heartClicked} >&#129505;</span>
                    :<span className="symbol__heart" onClick={heartClicked}>&#9825;</span>  
                } 
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