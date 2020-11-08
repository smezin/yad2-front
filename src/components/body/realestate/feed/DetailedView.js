import React from 'react'
import DetailedViewAds from './DetailedViewAds'
import DetailedViewDetails from './DetailedViewDetails'
import DetailedViewSummary from './DetailedViewSummary'

const DeatailedView = (props) => {
  const {item, toggleDetails} = props
  return (
    <div className="detailed-view" >     
      <DetailedViewSummary item={item} toggleDetails={toggleDetails}/>     
      <div className="detailed-view__details-container">
        <DetailedViewAds />
        <DetailedViewDetails item={item} />
      </div>
    </div>
  )
}
export default DeatailedView