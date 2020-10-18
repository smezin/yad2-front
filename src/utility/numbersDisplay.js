//add the thousands seperator , 
export const addSeperator = (numAsString) => {
    if (typeof(numAsString) === 'number') {
        numAsString = numAsString.toString()
    } 
    if (typeof(numAsString) === 'string') {
        let result = numAsString.replace(',','')
        return result.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return ''
}
//remove the thousands seperator , 
export const removeSeperator = (numAsString) => {
    if (typeof(numAsString) === 'number') {
        numAsString = numAsString.toString()
    }
    if (typeof(numAsString) === 'string') {
        return numAsString.replace(/,/g,'')
    }
    return ''
}