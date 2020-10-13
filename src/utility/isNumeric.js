//check if string represents numeral value

const isNumeric = (input) => {
    if (typeof(input) === 'number') { input = input.toString()}
    if (typeof(input) != "string") return false   
    return !isNaN(input) && !isNaN(parseFloat(input)) 
}
export default isNumeric