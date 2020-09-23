import resources from '../resources.json'

const fetchFromResource = (...path) => {
    return path.reduce((acc, cur) => {
        if (!acc[cur]) {
            return acc
        }
        acc = acc[cur]
        return acc
    }, resources)
}

export default fetchFromResource