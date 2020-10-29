//CLEAR_ITEM
export const clearItem = () => ({
  type: "CLEAR_ITEM",
});

//SET_CATEGORY
export const setCategory = (category) => ({
  type: "SET_CATEGORY",
  category,
});
//SET_ENTRY_DATE
export const setEntryDate = (entryDate) => ({
  type: "SET_ENTRY_DATE",
  entryDate,
});
//SET_FLOOR
export const setFloor = (floor) => ({
  type: "SET_FLOOR",
  floor,
});
//SET_ID
export const setId = (id) => ({
  type: "SET_ID",
  id,
});
//SET_LOCATION
export const setLocation = (location) => ({
  type: "SET_LOCATION",
  location,
});
//SET_MY_GENDER

//SET_PRICE
export const setPrice = (price) => ({
  type: "SET_PRICE",
  price,
});
//SET_PROPERTIES
export const setProperties = (properties) => ({
  type: "SET_PROPERTIES",
  properties,
});
//SET_PROPERTY_TYPE
export const setPropertyType = (propertyType) => ({
  type: "SET_PROPERTY_TYPE",
  propertyType,
});
//SET_ROOMS
export const setRooms = (rooms) => ({
  type: "SET_ROOMS",
  rooms,
});
//SET_SIZE
export const setSize = (size) => ({
  type: "SET_SIZE",
  size,
});

//SET_TEXT
export const setText = (text) => ({
  type: "SET_TEXT",
  text,
});
//SET_AVAILABLE_IMMEDIATELY
export const setAvailableImmediately = (availableImmediately) => ({
  type: "SET_AVAILABLE_IMMEDIATELY",
  availableImmediately,
});
//SET_BALCONY
export const setBalcony = (balcony) => ({
  type: "SET_BALCONY",
  balcony,
});
//SET_DEAL_TYPE
export const setDealType = (dealType) => ({
  type: "SET_DEAL_TYPE",
  dealType,
});
//SET_RESTROOM
export const setRestroom = (restroom) => ({
  type: "SET_RESTROOM",
  restroom,
});
//SET_ROOMMATES
export const setRoommates = (roommates) => ({
  type: "SET_ROOMMATES",
  roommates,
});
//SET_SECURITY_ROOM
export const setSecurityRoom = (securityRoom) => ({
  type: "SET_SECURITY_ROOM",
  securityRoom,
});
//SET_SPLIT
export const setSplit = (split) => ({
  type: "SET_SPLIT",
  split,
});
//SET_STORAGE
export const setStorage = (storage) => ({
  type: "SET_STORAGE",
  storage,
});
//publish Item
export const publishItem = async (item, ownerId, ownerMobile, dispatch) => {
  try {
    const requestParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item, ownerId, ownerMobile }),
    };
    let response = await fetch(
      "http://localhost:8080/api/item/additem",
      requestParams
    );
    if (response.status !== 200) {
      throw response.status;
    }
    response = await response.json();
    dispatch(setId(response._id))
    return response._id
  } catch (e) {
    console.log(e);
  }
};