export const feedReducerInitialState = {
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 20,
    isLoading: true,
    itemsFeed: [],
    sort: {
        order: 'date',
        onlyWithImage: false,
        onlyWithPrice: false
    }
}

export const feedReducer = (state = feedReducerInitialState, action) => {
    switch(action.type) {
        case 'SET_FEED_ITEMS':
            const feedLength = action.itemsFeed ? action.itemsFeed.length : 0
            return {
                ...state,
                itemsFeed: action.itemsFeed,
                totalItems: feedLength,
                totalPages: Math.ceil(feedLength / state.itemsPerPage)
            }
        case 'SET_ORDER':
            return {
                ...state,
                sort: {
                    ...state.sort,
                    order: action.order
                }
            }
        case 'SET_IMAGE_ONLY':
            return {
                ...state,
                sort: {
                    ...state.sort,
                    onlyWithImage: action.onlyWithImage
                }
        }
        case 'SET_PRICE_ONLY':
            return {
                ...state,
                sort: {
                    ...state.sort,
                    onlyWithPrice: action.onlyWithPrice
                }
            }
                    
        default:
            return state
    }
}