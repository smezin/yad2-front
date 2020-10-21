import React, { useState } from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const PromotedProject = (props) => {
    const { projectItem } = props
    const [isFavorite, setIsFavorite] = useState(false)
    const address = projectItem.item.location.split(',')[0]
    const city = projectItem.item.location.split(',')[address.split(',').length]
    const imgPath = projectItem.images[0]
    const text = projectItem.item.text
    const ribbonLocalName = projectItem.item.ribbonText || fetchFromResource('string', 'promotedProjects', 'defaultRibbonText', 'localName')
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
                <div className="promoted-project__address">{address}</div> 
                <div className="promoted-project__city">{city}</div> 
                <div className="promoted-project__text">{text}</div>   
            </div>                 
        </div>
    )
}

export default PromotedProject