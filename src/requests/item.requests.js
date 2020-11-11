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
export const getItemById = async (itemId) => {
  const requestParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  }
  try {
    let response = await fetch(`${process.env.REACT_APP_DEV_SERVER_IP}/api/item/getitem/${itemId}`, requestParams);
    if (response.status !== 200) {
      throw response.status;
  }
  response = await response.json();
  return response;
  } catch(e) {
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
