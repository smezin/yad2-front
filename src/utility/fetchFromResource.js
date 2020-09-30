import resources from '../resources'

const fetchFromResource = (...path) => {
    return path.reduce((acc, cur) => {
        if (!acc[cur]) {
            return {}
        }
        acc = acc[cur]
        return acc
    }, resources)
}

export default fetchFromResource