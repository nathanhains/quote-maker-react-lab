export default (state = [], action) => {
  switch(action.type){
    case 'ADD_QUOTE':
      return state.concat(action.quote)
    case "REMOVE_QUOTE":
      return state.filter(q => q.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      const upQuoteIndex = state.findIndex(q=>q.id === action.quoteId)
      const upQuote = {
        ...state[upQuoteIndex], 
        votes: state[upQuoteIndex].votes + 1 }
      return [
        ...state.slice(0, upQuoteIndex), 
        upQuote, 
        ...state.slice(upQuoteIndex +1)]
      case "DOWNVOTE_QUOTE":
        const downQuoteIndex = state.findIndex(q=>q.id === action.quoteId)
        if(state[downQuoteIndex].votes >0){
        const downQuote = {
          ...state[downQuoteIndex], 
          votes: state[downQuoteIndex].votes - 1 }
        return [
          ...state.slice(0, downQuoteIndex), 
          downQuote, 
          ...state.slice(downQuoteIndex +1)]
        }
    default:
      return state
  }
}
