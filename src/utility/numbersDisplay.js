export const addSeperator = (numAsString) => {
    if (typeof(numAsString) !== 'string') {
        return ''
    }
    let result = numAsString.replace(',','')
    return result.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const removeSeperator = (numAsString) => {
    if (typeof(numAsString) !== 'string') {
        return ''
    }
    return numAsString.replace(/,/g,'')
}