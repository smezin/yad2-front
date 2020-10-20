import isNumeric from "utility/isNumeric"

const cleanFilters = (filters) => {
    if (typeof(filters) !== 'object' || typeof(filters.search) !== 'object') {
        return
    }
    let cleanedFilters = JSON.parse(JSON.stringify(filters))
    Object.keys(cleanedFilters.search).forEach((searchFilter) => {
        (cleanedFilters.search[searchFilter] === undefined || 
            cleanedFilters.search[searchFilter].length === 0  
        ) &&
        delete cleanedFilters.search[searchFilter] 
    })
    Object.keys(cleanedFilters.search).forEach((searchFilter) => {
        if (isNumeric(cleanedFilters.search[searchFilter])) {
            cleanedFilters.search[searchFilter] = parseFloat(cleanedFilters.search[searchFilter])
        }
    })
}
export default cleanFilters