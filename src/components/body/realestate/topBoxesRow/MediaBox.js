import React from 'react'

const MediaBox = (props) => {
    const { box } = props
    return (
        <div className="media-box__container">        
            <div className="media-box">
                <img src={box.path} alt="ad" />
                <p>{box.text}</p>
            </div>               
        </div>
    )
}
export default MediaBox