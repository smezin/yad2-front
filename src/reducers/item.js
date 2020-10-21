const initialItemProperties = {
    availableImmediately: false,
    balcony: undefined,
    category: 'forsale',
    dealType: undefined,
    entryDate: undefined,
    floor: undefined,
    isPromoted: undefined,
    location: undefined,
    myGender: undefined,
    price: undefined,
    properties: [],
    propertyType: undefined,
    restroom: undefined,
    ribbonText: undefined,
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
    properties: initialItemProperties,
}
export const itemReducer = (state = itemReducerInitialState, action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    category: action.category
                }   
            }
        case 'SET_ENTRY_DATE':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    entryDate: action.entryDate
                }
            }
        case 'SET_FLOOR':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    floor: action.floor
                }

            }
        case 'SET_LOCATION':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    location: action.location
                }
            }
        case 'SET_MY_GENDER': 
            return {

            }
        case 'SET_PRICE':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    price: action.price
                }
            }
        case 'SET_PROPERTIES': 
            return {
                ...state,
                properties: {
                    ...state.properties,
                    properties: action.properties
                }
            }
        case 'SET_ROOMS':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    rooms: action.rooms
                }
            }
        case 'SET_SIZE':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    size: action.size
                }
            }
        case 'SET_TEXT': 
            return {
                ...state,
                properties: {
                    ...state.properties,
                    text: action.text
                }
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
        case 'TOGGLE_PROPERTY_TYPE': 
            return {
                ...state,
                properties: {
                    ...state.properties,
                    propertyType: action.propertyType
                }
            }
        case 'TOGGLE_RESTROOM': 
            return {

            }
        case 'TOGGLE_ROOMMATES':
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