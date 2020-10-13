const handleBottomFiltersChanged = () => {
    //wait for state to update before fetching
    setTimeout(() => {
     //   fetchItems()
    }, 0)
}
//CLEAR ADVANCED FILTERS
export const clearAdvancedFilters = () => ({
    type: 'CLEAR_ADVANCED_FILTERS'
})

//CLEAR SEARCH
export const clearSearch = () => ({
    type: 'CLEAR_SEARCH'
})
//CLEAR FILTERS
export const clearFilters = () => ({
    type: 'CLEAR_FILTERS'
})
//DEC_ADVANCED_FILTERS
export const decAdvancedFilters = () => ({
    type: 'DEC_ADVANCED_FILTERS'
})
//INC_ADVANCED_FILTERS
export const incAdvancedFilters = () => ({
    type: 'INC_ADVANCED_FILTERS'
})
//SET CATEGORY
export const setSearchCategory = (category) => {
    handleBottomFiltersChanged()
    return {
        type: 'SET_CATEGORY',
        category
    }
}
//SET DEAL TYPES
export const setDealTypes = (dealTypes) => ({
    type: 'SET_DEAL_TYPES',
    dealTypes
})
//SET FILTERS
export const setFilters = (filters) => ({
    type: 'SET_FILTERS',
    filters
})
//SET LOCATION
export const setLocation = (location) => ({
    type: 'SET_LOCATION',
    location
})
//SET LOCATION CURRENT TEXT
export const setLocationCurrentText = (locationCurrentText) => ({
    type: 'SET_LOCATION_CURRENT_TEXT',
    locationCurrentText
})
//SET MAX FLOOR
export const setMaxFloor = (maxFloor) => ({
    type: 'SET_MAX_FLOOR',
    maxFloor
})
//SET MAX PRICE
export const setMaxPrice = (maxPrice) => ({
    type: 'SET_MAX_PRICE',
    maxPrice
})
//SET MAX ROOMMATES
export const setMaxRoommates = (maxRoommates) => ({
    type: 'SET_MAX_ROOMMATES',
    maxRoommates
})
//SET MAX ROOMS
export const setMaxRooms = (maxRooms) => ({
    type: 'SET_MAX_ROOMS',
    maxRooms
})
//SET MAX SIZE
export const setMaxSize = (maxSize) => ({
    type: 'SET_MAX_SIZE',
    maxSize
})
//SET MIN FLOOR
export const setMinFloor = (minFloor) => ({
    type: 'SET_MIN_FLOOR',
    minFloor
})
//SET MIN PRICE
export const setMinPrice = (minPrice) => ({
    type: 'SET_MIN_PRICE',
    minPrice
})
//SET MIN ROOMMATES
export const setMinRoommates = (minRoommates) => ({
        type: 'SET_MIN_ROOMMATES',
        minRoommates
})
//SET MIN ROOMS
export const setMinRooms = (minRooms) => ({
    type: 'SET_MIN_ROOMS',
    minRooms
})
//SET MIN SIZE
export const setMinSize = (minSize) => ({
    type: 'SET_MIN_SIZE',
    minSize
})
//SET PROPERTIES
export const setProperties = (properties) => ({
    type: 'SET_PROPERTIES',
    properties
})
//SET TEXT
export const setText = (text) => ({
    type: 'SET_TEXT',
    text
})
//SET TYPE
export const setPropertyTypes = (propertyType) => ({
    type: 'SET_PROPERTY_TYPES',
    propertyType
})

//SORT BY DATE
export const sortByDate = () => {
    handleBottomFiltersChanged()
    return {
        type: 'SORT_BY_DATE'
    }
}

//SORT BY PRICE HIGH LOW
export const sortByPriceHighlow = () => {
    handleBottomFiltersChanged()
    return {
        type: 'SORT_BY_PRICE_HIGH_LOW'
    }
}

//SORT BY PRICE LOW HIGH
export const sortByPriceLowHigh = () => {
    handleBottomFiltersChanged()
    return {
        type: 'SORT_BY_PRICE_LOW_HIGH'
    }
}

//TOGGLE SHOW ONLY ITEMS WITH PRICE
export const toggleShowOnlyItemsWithPrice = () => {
    handleBottomFiltersChanged()
    return {
        type: 'TOGGLE_SHOW_ONLY_ITEMS_WITH_PRICE'
    }
}

//TOGGLE SHOW ONLY ITEMS WITH IMAGE
export const toggleShowOnlyItemsWithImage = () => {
    handleBottomFiltersChanged()
    return {
        type: 'TOGGLE_SHOW_ONLY_ITEMS_WITH_IMAGE'
    }
}


//REMOVE TYPE
export const removeType = (propertyType) => ({
    type: 'REMOVE_TYPE',
    propertyType
})
//TOGGLE BALCONY
export const toggleBalcony = (balcony) => ({
    type: 'TOGGLE_BALCONY',
    balcony
})
//TOGGLE RESTROOM
export const toggleRestroom = (restroom) => ({
    type: 'TOGGLE_RESTROOM',
    restroom
})
//TOGGLE ROOMS
export const toggleRooms = (rooms) => ({
    type: 'TOGGLE_ROOMS',
    rooms,
})
//TOGGLE SECURITY ROOM
export const toggleSecurityRoom = (securityRoom) => ({
    type: 'TOGGLE_SECURITY_ROOM',
    securityRoom
})
//TOGGLE SPLIT
export const toggleSplit = (split) => ({
    type: 'TOGGLE_SPLIT',
    split
})
//TOGGLE STORAGE
export const toggleStorage = (storage) => ({
    type: 'TOGGLE_STORAGE',
    storage
})
//TOGGLE AVAILABLE IMMEDIATELY 
export const toggleAvailableImmediately = (availableImmediately) => ({
    type: 'TOGGLE_AVAILABLE_IMMEDIATELY',
    availableImmediately
})
//SET MIN ENTRY DATE
export const setMinEntryDate = (minEntryDate) => ({
    type: 'SET_MIN_ENTRY_DATE',
    minEntryDate
})

//TOGGLE PROPERTY
export const toggleProperty = (property) => ({
    type: 'TOGGLE_PROPERTY',
    property
})
//TOGGLE DEAL TYPE
export const toggleDealType = (dealType) => ({
    type: 'TOGGLE_DEAL_TYPE',
    dealType
})
