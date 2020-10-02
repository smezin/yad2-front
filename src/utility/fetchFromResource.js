import resources from 'resources/resourcesHEB'

const fetchFromResource = (expectedType, ...path) => {
    let found = true
    const fetchResult = path.reduce((acc, cur) => {
        if (!acc[cur]) {
            found = false
            return {}
        }
        acc = acc[cur]
        return acc
    }, resources)

    if (found && typeof(fetchResult) === expectedType) {
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