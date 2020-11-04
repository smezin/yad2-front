import React from 'react'
import { socialMedaiIcons } from 'resources/socialMediaIcons'

const SocialLinks = () => {
    const iconsSource = Object.keys(socialMedaiIcons).map((icon) => socialMedaiIcons[icon]['imgSrc'])
    return (
        <div className="social-media-links">
            {
                iconsSource.map((imgSrc) => 
                <div className="social-media-links__icon-container" key={imgSrc}>
                    <img src={imgSrc} alt="icon" className="social-media-links__icon" />
                </div>
                )
            }
        </div>
    )
}
export default SocialLinks