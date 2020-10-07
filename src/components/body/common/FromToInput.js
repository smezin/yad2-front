import React, {useState, useEffect} from 'react'
import NumberPicker from 'components/body/common/NumberPicker'
import { upArrow, downArrow} from 'resources/specialChars'

const FromToInput = (props) => {
    const { menuSpecs } = props
    const { from, upTo, min, max, step, parentRect} = menuSpecs
    const [isFromOpen, setIsFromOpen] = useState(false)
    const [isUpToOpen, setIsUpToOpen] = useState(false)
    const [hasData, setHasData] = useState(false)
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
        console.log(menuWidth)
        const menuVisbilityStatus = (menuWidth === parentRect.right) ? "hidden" : "visible"
        return {
            left: parentRect.left - (menuWidth - parentRect.width)/2,
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

    return ( 
    <div className="from-to-input" id="from-to-input" style={setMenuLocation()}>
        <div className="from-to-input__from" onClick={toggleFromDropdown}>
            {from} {isFromOpen ? downArrow : upArrow} 
            {   isFromOpen &&
                <NumberPicker set="min" min={min} max={max} step={step} downOffset={menuHeight}/>
            }
        </div>
        <div className="from-to-input__upto" onClick={toggleUpToDropdown}>
            {upTo} {isUpToOpen ? downArrow : upArrow}
            {   isUpToOpen &&
                <NumberPicker set="max" min={min} max={max} step={step} downOffset={menuHeight}/>
            }
        </div>

    </div>
    )
}
export default FromToInput
