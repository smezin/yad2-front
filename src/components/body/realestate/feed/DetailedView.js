import React from 'react'
import DetailedViewSummary from './DetailedViewSummary'

const DeatailedView = (props) => {
  const {item, toggleDetails} = props
  return (
    <div className="detailed-view" >
      <div className="detailed-view__summary">
        <DetailedViewSummary item={item} toggleDetails={toggleDetails}/>
      </div>
      <div className="detailed-view__details-container">
        <div className="detailed-view__ads">
        detailed-view__ads
        </div>
        <div className="detailed-view__details">
        detailed-view__details
        </div>
      </div>
    </div>
  )
}
export default DeatailedView