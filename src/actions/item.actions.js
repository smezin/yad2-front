//CLEAR_ITEM
export const clearItem = () => ({
  type: "CLEAR_ITEM",
})
//SET_AVAILABLE_IMMEDIATELY
export const setAvailableImmediately = (availableImmediately) => ({
  type: "SET_AVAILABLE_IMMEDIATELY",
  availableImmediately,
})
//SET_BALCONY
export const setBalcony = (balcony) => ({
  type: "SET_BALCONY",
  balcony,
})
//SET_CATEGORY
export const setCategory = (category) => ({
  type: "SET_CATEGORY",
  category,
})
//SET_DEAL_TYPE
export const setDealType = (dealType) => ({
  type: "SET_DEAL_TYPE",
  dealType,
})
//SET_ENTRY_DATE
export const setEntryDate = (entryDate) => ({
  type: "SET_ENTRY_DATE",
  entryDate,
})
//SET_FLOOR
export const setFloor = (floor) => ({
  type: "SET_FLOOR",
  floor,
})
//SET_IMAGES
export const setImage = (image) => ({
  type: 'SET_IMAGE',
  image
})
//SET_LOCATION
export const setLocation = (location) => ({
  type: "SET_LOCATION",
  location,
})
//SET_MY_GENDER

//SET_PRICE
export const setPrice = (price) => ({
  type: "SET_PRICE",
  price,
})
//SET_PROPERTIES
export const setProperties = (properties) => ({
  type: "SET_PROPERTIES",
  properties,
})
//SET_PROPERTY_TYPE
export const setPropertyType = (propertyType) => ({
  type: "SET_PROPERTY_TYPE",
  propertyType,
})

//SET_SIZE
export const setSize = (size) => ({
  type: "SET_SIZE",
  size,
})

//SET_TEXT
export const setText = (text) => ({
  type: "SET_TEXT",
  text,
})

//SET_RESTROOM
export const setRestroom = (restroom) => ({
  type: "SET_RESTROOM",
  restroom,
})
//SET_ROOMMATES
export const setRoommates = (roommates) => ({
  type: "SET_ROOMMATES",
  roommates,
})
//SET_ROOMS
export const setRooms = (rooms) => ({
  type: "SET_ROOMS",
  rooms,
})
//SET_SECURITY_ROOM
export const setSecurityRoom = (securityRoom) => ({
  type: "SET_SECURITY_ROOM",
  securityRoom,
})
//SET_SPLIT
export const setSplit = (split) => ({
  type: "SET_SPLIT",
  split,
})
//SET_STORAGE
export const setStorage = (storage) => ({
  type: "SET_STORAGE",
  storage,
})
//publish Item
export const publishItem = async (item, ownerId, ownerMobile) => {
  try {
    const requestParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item, ownerId, ownerMobile }),
    }
    let response = await fetch(
      `${process.env.REACT_APP_DEV_SERVER_IP}/api/item/additem`,
      requestParams
    )
    if (response.status !== 200) {
      throw response.status
    }
    response = await response.json()
    return response._id
  } catch (e) {
    console.log(e)
  }
}

export const addImageToItem = async (itemId, image) => {
  const imgBody = new FormData()
  imgBody.append('image', image)
  
  try {
    const requestParams = {
      method: "POST",
      body: imgBody,
    }
    let response = await fetch(`${process.env.REACT_APP_DEV_SERVER_IP}/api/item/upload-image/${itemId}`, requestParams)
    if (response.status !== 200) {
      throw response.status
    }
    response = await response.json()
  } catch (e) {
    console.log(e)
  }
}
export const deleteItem = async (itemId) => {
  try {
    const requestParams = {
      method: 'DELETE',
    }
    let response = await fetch(`${process.env.REACT_APP_DEV_SERVER_IP}/api/item/delete-item/${itemId}`, requestParams)
    if (response !== 200) {
      throw response.status
    }
    response = await response.json()
  } catch (e) {
    console.log(e)
  }
}
