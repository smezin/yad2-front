import resources from '../resources.json'

const fetchFromResource = (...path) => {
    return path.reduce((acc, cur) => {
        acc = acc[cur]
        return acc
    }, resources)
}

export default fetchFromResource