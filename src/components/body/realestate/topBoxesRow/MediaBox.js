import React from 'react'
import {Link} from 'react-router-dom'

const MediaBox = (props) => {
    const { box } = props
    return (
        <div className="media-box__container">        
            <a href={box.path} target="_blank" className="media-box">
                <img src={box.imgSrc} alt="ad" />
                <p>{box.text}</p>
            </a>               
        </div>
    )
}
export default MediaBox