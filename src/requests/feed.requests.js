const defaultGetRequestParams = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  }
}
export const getFeed = async () => {
  try {
    let response = await fetch( `${process.env.REACT_APP_DEV_SERVER_IP}/api/feed/getfeed`, defaultGetRequestParams);
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
    let response = await fetch(`${process.env.REACT_APP_DEV_SERVER_IP}/api/feed/getfeed/${category}`, defaultGetRequestParams);
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
    let response = await fetch(`${process.env.REACT_APP_DEV_SERVER_IP}/api/feed/getUserfeed/${userId}`, defaultGetRequestParams);
    if (response.status !== 200) {
      throw response.status;
    }
    response = await response.json();
    return response;
  } catch(e) {
    console.log(e)
  }
}
export const getFilteredFeed = async (filters) => {
  const requestParams = {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(filters) 
  }
  try {
    let response = await fetch (`${process.env.REACT_APP_DEV_SERVER_IP}/api/feed/getFilteredFeed`, requestParams)
    if (response.status !== 200) {
      throw response.status
    }
    response = await response.json()
    return response
  } catch (e) {
    console.log(e)
  }
  
}
