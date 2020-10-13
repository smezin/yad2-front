import React from 'react'
import FloorPicker from './FloorPicker'
import SizePicker from './Size'
import EntryDate from './EntryDate'
import Balcony from './Balcony'

const AdvancedSearchRow = (props) => {
    const { category } = props

    const renderAdvancedSearchRowsByCategory = () => {
        switch(category) {
            case 'forsale':
                return (
                    <React.Fragment>
                        <div className="advanced-search-row">
                            <FloorPicker />
                            <SizePicker />
                            <EntryDate />
                        </div>
                    </React.Fragment>
                )
            case 'rent':
                return (
                    <React.Fragment>
                        <div className="advanced-search-row">
                          
                           
                            <EntryDate />
                        </div>
                        <div className="advanced-search-row">
                            <FloorPicker />
                           
                        </div>
                    </React.Fragment>
                )
            case 'roommates':
                return (
                    <React.Fragment>
                        <div className="advanced-search-row">
                            <Balcony />
                            <SizePicker />
                        </div>                       
                    </React.Fragment>
                )
                
            case 'commercial':
                return
            default:
                return   
        }
    }
    return (
        <div>
           {renderAdvancedSearchRowsByCategory()}
        </div>
    )
}
export default AdvancedSearchRow