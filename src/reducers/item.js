const newItem = {
    
    availableImmediately: false,
    balcony: undefined,
    category: 'forsale',
    dealType: undefined,
    entryDate: undefined,
    floor: undefined,
    location: undefined,
    myGender: undefined,
    price: undefined,
    properties: [],
    restroom: undefined,
    roommates: undefined,
    rooms: undefined,
    securityRoom: undefined,
    size: undefined, 
    split: undefined,
    storage: undefined,
    text: undefined,
    
}
export const itemReducerInitialState = {
    images: [],
    item: newItem,
}
export const itemReducer = (state = itemReducerInitialState, action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            return {

            }
        case 'SET_ENTRY_DATE':
            return {

            }
        case 'SET_FLOOR':
            return {

            }
        case 'SET_LOCATION':
            return {

            }
        case 'SET_MY_GENDER': 
            return {

            }
        case 'SET_PRICE':
            return {
    
            }
        case 'SET_SIZE':
            return {
                
            }
        case 'SET_TEXT': 
            return {

            }
        case 'TOGGLE_AVAILABLE_IMMEDIATELY':
            return {

            }
        case 'TOGGLE_BALCONY':
            return {

            }
        case 'TOGGLE_DEAL_TYPE':
            return {

            }
        case 'TOGGLE_PROPERTIES': 
            return {

            }
        case 'TOGGLE_RESTROOM': 
            return {

            }
        case 'TOGGLE_ROOMMATES':
            return {

            }
        case 'TOGGLE_ROOMS':
            return {

            }
        case 'TOGGLE_SECURITY_ROOM':
            return {

            }
        case 'TOGGLE_SPLIT':
            return {

            }
        case 'TOGGLE_STORAGE':
            return {

            }
        default:
            return {
                state
            }
    }
} 