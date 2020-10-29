const initialItemProperties = {
    availableImmediately: false,
    balcony: undefined,
    category: 'forsale',
    dealType: undefined,
    entryDate: undefined,
    floor: undefined,
    imageUrls: [],
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
    id: undefined,
    properties: initialItemProperties,
}
export const itemReducer = (state = itemReducerInitialState, action) => {
    switch(action.type) {
        case 'CLEAR_ITEM':
            return {
                ...itemReducerInitialState
            }
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
        case 'SET_ID':
            console.log('from reducer ', action.id)
            return {
                ...state,
                id: action.id,
                properties: {
                    ...state.properties
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
        case 'SET_PROPERTY_TYPE': 
            return {
                ...state,
                properties: {
                    ...state.properties,
                    propertyType: action.propertyType
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
        case 'SET_AVAILABLE_IMMEDIATELY':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    availableImmediately: action.availableImmediately
                }
            }
        case 'SET_BALCONY':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    balcony: action.balcony
                }
            }
        case 'SET_DEAL_TYPE':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    dealType: action.dealType
                }
            }
       
        case 'SET_RESTROOM': 
            return {
                ...state,
                properties: {
                    ...state.properties,
                    restroom: action.restroom
                }
            }
        case 'SET_ROOMMATES':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    roommates: action.roommates
                }
            }
        case 'SET_SECURITY_ROOM':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    securityRoom: action.securityRoom
                }
            }
        case 'SET_SPLIT':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    split: action.split
                }
            }
        case 'SET_STORAGE':
            return {
                ...state,
                properties: {
                    ...state.properties,
                    storage: action.storage
                }
            }
        default:
            return {
                ...state
            }
    }
} 