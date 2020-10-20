import React, {useState, useEffect} from 'react'
import RangePickerDiscrete from 'components/body/common/RangePickerDiscrete'
import { upArrow, downArrow} from 'resources/specialChars'
import onClickOutside from 'react-onclickoutside'
import isNumeric from 'utility/isNumeric'

function RangeInputDiscrete (props) 
{
    const { menuSpecs, autoPosition } = props
    const { from, upTo, parentRect, header} = menuSpecs
    const [isFromOpen, setIsFromOpen] = useState(false)
    const [isUpToOpen, setIsUpToOpen] = useState(false)
    const [menuWidth, setMenuWidth] = useState(parentRect.right) 
    const [menuHeight, setMenuHeight] = useState(0)
   
    const toggleFromDropdown = (() => {
        setIsFromOpen(!isFromOpen)
        setIsUpToOpen(false)
    })
    const toggleUpToDropdown = (() => {
        setIsUpToOpen(!isUpToOpen)
        setIsFromOpen(false)
    })

    const setMenuLocation = () => { 
        if (!autoPosition) {
            return
        }
        const menuVisbilityStatus = (menuWidth === parentRect.right) ? "hidden" : "visible"
        return {
            left: parentRect ? parentRect.left - (menuWidth - parentRect.width)/2 : 0,
            visibility: menuVisbilityStatus
        } 
    }
    
    useEffect ( () => {
        const menuRect = document.getElementById('range-input')
        if (menuRect) {
            setMenuWidth(menuRect.getBoundingClientRect().width) 
            setMenuHeight(menuRect.getBoundingClientRect().height)    
        } else {
            setMenuWidth(0) 
            setMenuHeight(0)
        }  
    },[])

    RangeInputDiscrete.handleClickOutside = () => {
        setIsFromOpen(false)
        setIsUpToOpen(false)
    }
    return ( 
    <div className="range-input" id="range-input" style={setMenuLocation()}>
        <div className={`range-input__from${isNumeric(from) ? '__has-data':''}`} onClick={toggleFromDropdown}>
            {from} {isFromOpen ? downArrow : upArrow} 
            {   isFromOpen &&
                <RangePickerDiscrete set="min" menuSpecs={menuSpecs} downOffset={menuHeight} header={header} />
            }
        </div>
        <div className={`range-input__upto${isNumeric(upTo) ? '__has-data':''}`} onClick={toggleUpToDropdown}>
            {upTo} {isUpToOpen ? downArrow : upArrow}
            {   isUpToOpen &&
                <RangePickerDiscrete set="max" menuSpecs={menuSpecs} downOffset={menuHeight} header={header} />
            }
        </div>

    </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => RangeInputDiscrete.handleClickOutside
}   
export default onClickOutside(RangeInputDiscrete, clickOutsideConfig)

