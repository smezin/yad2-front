export const feedReducerInitialState = {
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 20,
    isLoading: true,
    itemsFeed: []
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
        default:
            return state
    }
}