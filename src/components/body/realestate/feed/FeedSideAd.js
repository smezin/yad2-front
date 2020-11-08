import React from 'react'
import { feedSideAds } from 'ads'
const FeedSideAd = () => {
  const { receiverAd, doorsAd, realtorAd } = feedSideAds
  return(
    <div className="feed-side-ads">
      <img className="side-ad" src={receiverAd.imgSrc} alt="ad" />
      <img className="side-ad" src={doorsAd.imgSrc} alt="ad" />
      <img className="side-ad" src={realtorAd.imgSrc} alt="ad" />
    </div>
  )
}
export default FeedSideAd