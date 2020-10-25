import React from 'react'
import { signInImage, signUpImage} from 'images'
import { useHistory } from 'react-router-dom'
const Modal = (props) => {
    const sideImage = signInImage
    // const history = useHistory()
    // console.log(history)
    return (
        <div className="modal">
            <div className="modal-content">
                <img className="modal-image" src={sideImage.imgSrc} alt={sideImage.alt} />
                <div className="modal-input-fields-container">

                </div>
            </div>
        </div>
    )
}
export default Modal