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
            return {
                ...state,
                itemsFeed: action.itemsFeed,
                totalItems: action.itemsFeed.length,
                totalPages: Math.ceil(action.itemsFeed.length / state.itemsPerPage)
            }
        default:
            return state
    }
}