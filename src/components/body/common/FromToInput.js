import React, {useState, useEffect} from 'react'
import NumberPicker from 'components/body/common/NumberPicker'
import { upArrow, downArrow} from 'resources/specialChars'
import onClickOutside from 'react-onclickoutside'

function FromToInput (props) 
{
    const { menuSpecs, autoPosition, toggleNumOfPicks } = props
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
        const menuRect = document.getElementById('from-to-input')
        if (menuRect) {
            setMenuWidth(menuRect.getBoundingClientRect().width) 
            setMenuHeight(menuRect.getBoundingClientRect().height)    
        } else {
            setMenuWidth(0) 
            setMenuHeight(0)
        }  
    },[])

    FromToInput.handleClickOutside = () => {
        setIsFromOpen(false)
        setIsUpToOpen(false)
    }
    return ( 
    <div className="from-to-input" id="from-to-input" style={setMenuLocation()}>
        <div className="from-to-input__from" onClick={toggleFromDropdown}>
            {from} {isFromOpen ? downArrow : upArrow} 
            {   isFromOpen &&
                <NumberPicker set="min" menuSpecs={menuSpecs} downOffset={menuHeight} header={header}
                toggleNumOfPicks={toggleNumOfPicks} />
            }
        </div>
        <div className="from-to-input__upto" onClick={toggleUpToDropdown}>
            {upTo} {isUpToOpen ? downArrow : upArrow}
            {   isUpToOpen &&
                <NumberPicker set="max" menuSpecs={menuSpecs} downOffset={menuHeight} header={header}
                toggleNumOfPicks={toggleNumOfPicks} />
            }
        </div>

    </div>
    )
}
const clickOutsideConfig = {
    handleClickOutside: () => FromToInput.handleClickOutside
}   
export default onClickOutside(FromToInput, clickOutsideConfig)

