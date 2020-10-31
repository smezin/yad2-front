export const setFeedItems = (itemsFeed) => ({
  type: 'SET_FEED_ITEMS',
  itemsFeed
})

export const getFeed = async () => {
  try {
    const requestParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    };
    let response = await fetch(`http://localhost:8080/api/item/getfeed`, requestParams);
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
    };
    let response = await fetch(`http://localhost:8080/api/item/getfeed/${category}`, requestParams);
    if (response.status !== 200) {
      throw response.status;
    }
    response = await response.json();
    return response;
  } catch (e) {
    console.log(e);
  }
}