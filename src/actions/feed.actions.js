export const setFeedItems = (itemsFeed) => ({
  type: 'SET_FEED_ITEMS',
  itemsFeed
})
export const setOrder = (order) => ({
  type: 'SET_ORDER',
  order
})
export const setImageOnly = (onlyWithImage) => ({
  type: 'SET_IMAGE_ONLY',
  onlyWithImage
})
export const setPriceOnly = (onlyWithPrice) => ({
  type: 'SET_PRICE_ONLY',
  onlyWithPrice
})
export const getFeed = async () => {
  try {
    const requestParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
    let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/item/getfeed`, requestParams);
    if (response.status !== 200) {
      throw response.status;
    }
    response = await response.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export const getCategoryFeed = async (category) => {
  try {
    const requestParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    let response = await fetch(`${process.env.REACT_APP_DEV_SERVER_IP}/api/item/getfeed/${category}`, requestParams);
    if (response.status !== 200) {
      throw response.status;
    }
    response = await response.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}
export const getUserFeed = async (userId) => {
  try {
    const requestParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    let response = await fetch(`${process.env.REACT_APP_DEV_SERVER_IP}/api/item/getUserfeed/${userId}`, requestParams);
    if (response.status !== 200) {
      throw response.status;
    }
    response = await response.json();
    return response;
  } catch(e) {
    console.log(e)
  }
}
