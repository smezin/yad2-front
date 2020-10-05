
export const filtersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOKLIST':
      return (
        {
          title: action.book.title,
          author: action.book.author,
          id: '123-456'
        })
      
    case 'REMOVE_BOOK':
      console.log(action.id)
      return state.filter(book => book.id !== action.id)
    default:
      return state
  }
};
