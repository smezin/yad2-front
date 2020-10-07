const setRangeFromMinMaxStep = (min, max, step) => {
    const length = Math.ceil((max - min + 1 + 1/step) / step)
    return Array.from({length}, (_, i) => (1 + i) * step)
}

export default setRangeFromMinMaxStep