import React from 'react'
import AdvancedSearchButton from './AdvancedSeachButton'
import AvailableImmediately from './AvailableImmediately'
import Balcony from './Balcony'
import ClearAdvancedFilters from './ClearAdvancedFilters'
import EntryDate from './EntryDate'
import FloorPicker from './FloorPicker'
import Restroom from './Restroom'
import RoommateGender from './RoommateGender'
import Rooms from './Rooms'
import SecurityRoom from './SecurityRoom'
import Text from './Text'
import SizePicker from './Size'
import Split from './Split'
import Storage from './Storage'

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
                            <AvailableImmediately />
                        </div>
                        <div className="advanced-search-row">
                            <Text />
                        </div>
                    </React.Fragment>
                )
            case 'rent':
                return (
                    <React.Fragment>
                        <div className="advanced-search-row">
                            <FloorPicker />
                            <SizePicker />
                            <EntryDate />
                            <AvailableImmediately />
                        </div>
                        <div className="advanced-search-row">
                            <Text />
                        </div>
                    </React.Fragment>
                )
            case 'roommates':
                return (
                    <div className="advanced-search-row">
                       <EntryDate />
                       <AvailableImmediately />
                       <RoommateGender />
                       <Text />
                    </div>      
                )
                
            case 'commercial':
                return (
                    <React.Fragment>
                    <div className="advanced-search-row">
                        <FloorPicker />
                        <SizePicker />
                        <EntryDate />
                        <AvailableImmediately />
                    </div>   
                    <div className="advanced-search-row">
                        <Balcony />
                        <Restroom />
                        <Storage />
                        <SecurityRoom />
                    </div>      
                    <div className="advanced-search-row">
                       <Split />
                       <Rooms />
                    </div>        
                    <div className="advanced-search-row">
                            <Text />
                    </div>               
                </React.Fragment>
                )
            default:
                return   
        }
    }
  
    return (
        <div>
           {renderAdvancedSearchRowsByCategory()}
           <div className="advanced-search-row">
              <AdvancedSearchButton />
              <ClearAdvancedFilters />
           </div>
           
        </div>
    )
}
export default AdvancedSearchRow