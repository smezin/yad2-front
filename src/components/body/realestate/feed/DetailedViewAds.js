import PromotedProject from 'components/body/promotedProjects/PromotedProject'
import { sampleItemOne } from 'data/fixtures/item'
import React from 'react'

const DetailedViewAds = () => {

  return (
    <div className="detailed-view-ads">
      <PromotedProject projectItem={sampleItemOne}/>    
    </div>
    
  )
}
export default DetailedViewAds