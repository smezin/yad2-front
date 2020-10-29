import isNumeric from "utility/isNumeric"

const cleanItem = (item) => {
    if (typeof(item) !== 'object' || typeof(item.properties) !== 'object') {
        return
    }
    let cleanedItem = JSON.parse(JSON.stringify(item))
    Object.keys(cleanedItem.properties).forEach((itemProperty) => {
        (cleanedItem.properties[itemProperty] === undefined || 
            cleanedItem.properties[itemProperty].length === 0    
        ) &&
        delete cleanedItem.properties[itemProperty] 
    })
    Object.keys(cleanedItem.properties).forEach((itemProperty) => {
        if (isNumeric(cleanedItem.properties[itemProperty])) {
            cleanedItem.properties[itemProperty] = parseFloat(cleanedItem.properties[itemProperty])
        }
    })
    return cleanedItem
}
export default cleanItem