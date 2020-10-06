const isNumeric = (string) => {
    if (typeof(string) != "string") return false   
    return !isNaN(string) && !isNaN(parseFloat(string)) 
}
export default isNumeric