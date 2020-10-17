import React from 'react'

const PromotedProject = (props) => {
    const { projectItem } = props
    const address = projectItem.item.location.split(',')[0]
    const city = projectItem.item.location.split(',')[address.split(',').length]
    const imgPath = projectItem.images[0]
    const text = projectItem.item.text
    
    return (
        <div className="promoted-project">
            <img src={imgPath} alt="x" />
            <div className="promoted-project__description">
                <div className="promoted-project__address">{address}</div> 
                <div className="promoted-project__city">{city}</div> 
                <div className="promoted-project__text">{text}</div>   
            </div>
                 
        </div>
    )
}

export default PromotedProject