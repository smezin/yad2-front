import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const DetailedViewDetails = (props) => {
  const { item } = props
  const itemDescriptionLocalName = fetchFromResource('string', 'feedItem', 'itemDescription', 'localName')
  return (
    <div className="detailed-view-details">
      <div className="detailed-view-details__description-header">
        {itemDescriptionLocalName}
      </div>
      <div className="detailed-view-details__description-body">
        {item.text}
      </div>
    </div>
  )
}
export default DetailedViewDetails