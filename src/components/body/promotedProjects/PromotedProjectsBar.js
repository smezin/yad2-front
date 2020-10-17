import React from 'react'
import PromotedProject from 'components/body/promotedProjects/PromotedProject'
import { sampleItemOne, sampleItemTwo, sampleItemThree } from 'data/fixtures/item'

const PromotedProjectsBar = () => {
    return (
        <div className="promoted-projects-bar">
            <PromotedProject projectItem={sampleItemOne} />
            <PromotedProject projectItem={sampleItemTwo} />
            <PromotedProject projectItem={sampleItemThree} />
        </div>
    )
}
export default PromotedProjectsBar