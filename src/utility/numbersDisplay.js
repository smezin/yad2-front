//add the thousands seperator , 
export const addSeperator = (numAsString) => {
    if (typeof(numAsString) !== 'string') {
        return ''
    }
    let result = numAsString.replace(',','')
    return result.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
//remove the thousands seperator , 
export const removeSeperator = (numAsString) => {
    if (typeof(numAsString) !== 'string') {
        return ''
    }
    return numAsString.replace(/,/g,'')
}