const setFromToInputDisplay = (from, upTo, localPlaceHolder, fromPlaceHolder, upToPlaceHolder) => {
    if (typeof(from) === 'number' && typeof(upTo) === 'string') {
        return (fromPlaceHolder + ' ' + from)
    } else if (typeof(from) === 'string' && typeof(upTo) === 'number') {
        return (upToPlaceHolder + ' ' + upTo)
    } else if (typeof(from) === 'number' && typeof(upTo) === 'number') {
        return (from + ' - ' + upTo)
    } else {
        return localPlaceHolder
    }
}
export default setFromToInputDisplay