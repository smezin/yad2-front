//Alphabet ordered
export const filtersReducerInitialState = {
  sortBy: 'date',
  locationCurrentText: '',
  numOfAdvancedFilters: 0,
  search: {
    availableImmediately: false,
    balcony: undefined,
    category: 'forsale',
    dealTypes: [],
    location: undefined,
    maxFloor: undefined,
    maxPrice: undefined,
    maxRoommates: undefined,
    maxRooms: undefined,
    maxSize: undefined,
    masterCategory: 'realestate',
    minEntryDate: undefined,
    minFloor: undefined,
    minPrice: undefined,
    minRoommates: undefined,
    minRooms: undefined,
    minSize: undefined,      
    properties: [],
    restroom: undefined,
    roommateGender: [],
    rooms: undefined,
    securityRoom: undefined,
    split: undefined,
    storage: undefined,
    text: undefined,
  },
}
const advancedFiltersInitialState = {
    availableImmediately: false,
    balcony: undefined,
    minEntryDate: undefined,
    minFloor: undefined,       
    minSize: undefined,      
    maxFloor: undefined,      
    maxSize: undefined,    
    properties: [],
    restroom: undefined,
    roommateGender: [],
    rooms: undefined,
    securityRoom: undefined,
    split: undefined,
    storage: undefined,
    text: undefined,
}
export const filtersReducer = (state = filtersReducerInitialState, action) => {
  switch (action.type) {
    case 'CLEAR_ADVANCED_FILTERS':
        return {
            numOfAdvancedFilters: 0,
            search: {
                ...state.search,
                ...advancedFiltersInitialState
            }
        }
    case 'CLEAR_FILTERS':
        return filtersReducerInitialState

    case 'CLEAR_SEARCH':
      return {
          sortBy: state.sortBy,
          ...filtersReducerInitialState,
          search: {
              ...filtersReducerInitialState.search,
              category: state.search.category
          }
      }
    case 'DEC_ADVANCED_FILTERS':
        return {
            ...state,
            numOfAdvancedFilters: state.numOfAdvancedFilters - 1
        }
    case 'INC_ADVANCED_FILTERS':
        return {
            ...state,
            numOfAdvancedFilters: state.numOfAdvancedFilters + 1
        }
    case 'SET_CATEGORY':
        return {
            ...state,
            search: {
                ...state.search,
                category: action.category
            }
        }
    case 'SET_LOCATION':
    return {
        ...state,
        locationCurrentText: action.location === undefined ? '' : action.location.description,
        search: {
            ...state.search,
            location: action.location
        }
    }
    case 'SET_DEAL_TYPES':
        return {
            ...state,
            search: {
                ...state.search,
                dealTypes: action.dealTypes
            }
        }
    case 'SET_FILTERS':
        return action.filters

    case 'SET_LOCATION_CURRENT_TEXT':
        return {
            ...state,
            locationCurrentText: action.locationCurrentText || ''
        }
        
    case 'SET_MAX_FLOOR':
      return {
          ...state,
          search: {
              ...state.search,
              maxFloor: action.maxFloor
          }
      }
  
    case 'SET_MAX_PRICE':
      return {
          ...state,
          search: {
              ...state.search,
              maxPrice: action.maxPrice
          }
      }
    case 'SET_MAX_ROOMMATES':
      return {
          ...state,
          search: {
              ...state.search,
              maxRoommates: action.maxRoommates
          }
      }
    case 'SET_MAX_ROOMS':
        return {
            ...state,
            search: {
                ...state.search,
                maxRooms: action.maxRooms
            }
        }

    case 'SET_MAX_SIZE':
        return {
            ...state,
            search: {
                ...state.search,
                maxSize: action.maxSize
            }
        }
    case 'SET_MIN_ENTRY_DATE':
      return {
          ...state,
          search: {
              ...state.search,
              minEntryDate: action.minEntryDate
          }
      }
    case 'SET_MIN_FLOOR':
      return {
          ...state,
          search: {
              ...state.search,
              minFloor: action.minFloor
          }
      }
    case 'SET_MIN_PRICE':
      return {
          ...state,
          search: {
              ...state.search,
              minPrice: action.minPrice
          }
      }
    case 'SET_MIN_ROOMMATES':
      return {
          ...state,
          search: {
              ...state.search,
              minRoommates: action.minRoommates
          }
      }
    case 'SET_MIN_ROOMS':
        return {
            ...state,
            search: {
                ...state.search,
                minRooms: action.minRooms
            }
        }
    case 'SET_MIN_SIZE':
      return {
          ...state,
          search: {
              ...state.search,
              minSize: action.minSize
          }
      }
    case 'SET_PROPERTY_TYPES':
        return {
            ...state,
            search: {
                ...state.search,
                types: action.propertyType
            }
        }
    case 'SET_PROPERTIES':
        return {
            ...state,
            search: {
                ...state.search,
                properties: action.properties
            }
        }
    case 'SET_TEXT':
      return {
          ...state,
          search: {
              ...state.search,
              text: action.text
          }
      }
    case 'SET_SORT_BY':
        return {
            ...state,
            sortBy: action.sortBy
        }
    
    case 'TOGGLE_BALCONY':
        return {
            ...state,
            search: {
                ...state.search,
                balcony: action.balcony
            }
        }
    case 'TOGGLE_RESTROOM':
        return {
            ...state,
            search: {
                ...state.search,
                restroom: action.restroom
            }
        }
    case 'TOGGLE_ROOMMATE_GENDER':
        return {
            ...state,
            search: {
                ...state.search,
                roommateGender: action.roommateGender
            }
        }
    case 'TOGGLE_ROOMS':
        return {
            ...state,
            search: {
                ...state.search,
                rooms: action.rooms
            }
        }
    case 'TOGGLE_SECURITY_ROOM':
        return {
            ...state,
            search: {
                ...state.search,
                securityRoom: action.securityRoom
            }
        }
      case 'TOGGLE_SPLIT':
          return {
              ...state,
              search: {
                  ...state.search,
                  split: action.split
              }
          }
      case 'TOGGLE_STORAGE':
        return {
            ...state,
            search: {
                ...state.search,
                storage: action.storage
            }
        }
    case 'REMOVE_TYPE':
        return {
            ...state,
            search: {
                ...state.search,
                types: state.search.types.filter((type) => type !== action.propertyType)
            }
        }
    case 'TOGGLE_AVAILABLE_IMMEDIATELY':
        return {
            ...state,
            search: {
                ...state.search,
                availableImmediately: action.availableImmediately
            }
        }
    case 'TOGGLE_PROPERTY':
        return {
            ...state,
            search: {
                ...state.search,
                properties: state.search.properties.includes(action.property)
                    ?
                    state.search.properties.filter((property) => property !== action.property)
                    :
                    [...state.search.properties, action.property]
            }
        }
    default:
        return state
    }
}
