const googlePlacesAPI = (callback) => {
    const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const googlePlacesAPIScriptURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places&language=he`
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