import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'
import FavoriteHeart from '../realestate/feed/FavoriteHeart'

const PromotedProject = (props) => {
    const { item, color } = props
    if (!item || !item.location || !item.text) {
        return null
    }
    const street = item.location.split(',')[0]
    const city = item.location.split(',')[1] || ''
    const imgUrl = item.imageUrls[0]
    const text = item.text
    const ribbonLocalName = item.ribbonText || fetchFromResource('string', 'promotedProjects', 'defaultRibbonText', 'localName')
    const themeMainColor = '#ff7100'
    const ribbonAltColor = '#0495ff'
    const ribbonColors = [themeMainColor, ribbonAltColor]
    let ribbonColor = themeMainColor
    if (color) {
        ribbonColor = color === 'alt' ? ribbonAltColor : color
    } else {
        ribbonColor = ribbonColors[Math.floor(Math.random() * ribbonColors.length)]
    }
    const style = {
        background: ribbonColor,
        borderColor: ribbonColor
    }
    return (
        <div className="promoted-project">
            <div className="promoted-project__image-container">
                <img src={imgUrl} alt="project-pic"/>
                <FavoriteHeart item={item} />
            </div>           
            <div className="ribbon" style={style}>{ribbonLocalName}</div>
            <div className="promoted-project__description">
                <div className="promoted-project__address">{street}</div> 
                <div className="promoted-project__city">{city}</div> 
                <div className="promoted-project__text">{text}</div>   
            </div>                 
        </div>
    )
}

export default PromotedProject