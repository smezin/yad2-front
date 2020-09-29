const googlePlacesAPI = (callback) => {
    const GOOGLE_MAPS_API_KEY = 'AIzaSyBgp2wPX_AjfYkz0QkcZw_z9Ujpp_d2_eo' //MOVE TO .ENV!
    const googlePlacesAPIScriptURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`
    const googlePlacesAPIScript = document.createElement("script")
    googlePlacesAPIScript.src = googlePlacesAPIScriptURL
    googlePlacesAPIScript.async = true
    document.head.appendChild(googlePlacesAPIScript)
    googlePlacesAPIScript.onload = () => {
        callback()
    }
}

export default (renderFunc) => {
    googlePlacesAPI(renderFunc)
}