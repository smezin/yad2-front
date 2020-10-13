//Alphabet ordered
export const filtersReducerInitialState = {
  sortBy: 'date',
  locationCurrentText: '',
  numOfAdvancedFilters: 0,
  search: {
      balcony: undefined,
      category: 'forsale',
      dealTypes: [],
      location: undefined,
      minEntryDate: undefined,
      minFloor: undefined,
      minPrice: undefined,
      minRoommates: undefined,
      minRooms: undefined,
      minSize: undefined,      
      maxFloor: undefined,
      maxPrice: undefined,
      maxRoommates: undefined,
      maxRooms: undefined,
      maxSize: undefined,
      onlyImmediateEntry: false,
      properties: [],
      restroom: undefined,
      rooms: undefined,
      securityRoom: undefined,
      split: undefined,
      storage: undefined,
      showOnlyItemsWithImage: false,
      showOnlyItemsWithPrice: false,
      text: undefined,
      types: []
  },
}

export const filtersReducer = (state, action) => {
  switch (action.type) {
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
                types: [action.dealTypes]
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
                types: [action.propertyType]
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
    case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }
    case 'SORT_BY_PRICE_HIGH_LOW':
        return {
            ...state,
            sortBy: 'priceHighLow'
        }
    case 'SORT_BY_PRICE_LOW_HIGH':
        return {
            ...state,
            sortBy: 'priceLowHigh'
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
    case 'TOGGLE_SHOW_ONLY_ITEMS_WITH_IMAGE':
        return {
            ...state,
            search: {
                ...state.search,
                showOnlyItemsWithImage: !state.search.showOnlyItemsWithImage
            }
        }
    case 'TOGGLE_SHOW_ONLY_ITEMS_WITH_PRICE':
      return {
          sortBy: state.sortBy,
          search: {
              ...state.search,
              showOnlyItemsWithPrice: !state.search.showOnlyItemsWithPrice
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
    case 'TOGGLE_ONLY_IMMEDIATE_ENTRY':
        return {
            ...state,
            search: {
                ...state.search,
                onlyImmediateEntry: !state.search.onlyImmediateEntry
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
    case 'TOGGLE_DEAL_TYPE':
        let newDealTypesArr = [...state.search.dealTypes]
        if (state.search.dealTypes.includes(action.dealType)) {
            newDealTypesArr = newDealTypesArr.filter((dealType) => dealType !== action.dealType)
        } else {
            newDealTypesArr.push(action.dealType)
        }
        return {
            ...state,
            search: {
                ...state.search,
                dealTypes: newDealTypesArr
            }
        }
    default:
        return state
    }
}
