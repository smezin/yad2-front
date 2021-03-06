import React from 'react'
import AvailableImmediately from './AvailableImmediately'
import Balcony from './Balcony'
import ClearAdvancedFilters from './ClearAdvancedFilters'
import EntryDate from './EntryDate'
import FloorPicker from './FloorPicker'
import Restroom from './Restroom'
import RoommateGender from './RoommateGender'
import Rooms from './CommercialRooms'
import SecurityRoom from './SecurityRoom'
import Text from './Text'
import SizePicker from './Size'
import Split from './Split'
import Storage from './Storage'
import GoSearch from '../GoSearch'

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
              <GoSearch searchType="advanced" />
              <ClearAdvancedFilters />
           </div>
           
        </div>
    )
}
export default AdvancedSearchRow