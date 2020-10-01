import resources from '../resources'

const fetchFromResource = (expectedType, ...path) => {
    const fetchResult = path.reduce((acc, cur) => {
        if (!acc[cur]) {
            expectedType = undefined
            return {}
        }
        acc = acc[cur]
        return acc
    }, resources)

    if (typeof(fetchResult) === expectedType) {
        return fetchResult
    } else {
        switch (expectedType) {
            case 'string':
                return ''
            case 'object':
                return {}
            default:
                return undefined
        }
    } 
}
export default fetchFromResource