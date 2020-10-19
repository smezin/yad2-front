//setting an array from parameters min, max, step
//i.e min=2 max=5 step=0.5 => [2, 2.5, 3, 3.5, 4, 4.5, 5]

const setRangeFromMinMaxStep = (min, max, step = 1) => {
    const length = Math.ceil((max - min + 1 + 1/step) / step)
    return Array.from({length}, (_, i) => (min + i -1) * step).filter((value)=>value<=max).filter((value)=>value>=min)
}

export default setRangeFromMinMaxStep