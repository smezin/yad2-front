const getSubPath = (fullPath, path) => {
    if (fullPath.includes(path)) {
        const startOfSubPath = fullPath.indexOf(path) + path.length + 1
        const endOfSubPath = (fullPath.indexOf('/', startOfSubPath) !== -1) ?
                                fullPath.indexOf('/', startOfSubPath) :
                                fullPath.length
        return fullPath.substring(startOfSubPath, endOfSubPath)
    }
    return '/'
}

export default getSubPath
