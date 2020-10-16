import React from 'react'
import { sampleItemOne } from 'data/fixtures/item'

const PromotedProject = () => {
    const address = sampleItemOne.item.location
    const city = address.split(',')[address.split(',').length - 1]
    const imgPath = sampleItemOne.images[0]
    const text = sampleItemOne.item.text
    console.log(address.split(','))
    
    return (
        <div className="promoted-project">
            <img src={imgPath} alt="x" />
            <div className="promoted-project__city">{city}</div> 
            <div className="promoted-project__address">{address}</div> 
            <div className="promoted-project__text">{text}</div>        
        </div>
    )
}

export default PromotedProject