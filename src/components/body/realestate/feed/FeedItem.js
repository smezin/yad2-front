import React, { useState } from 'react'
import { NIS } from 'resources/specialChars'
import fetchFromResource from 'utility/fetchFromResource'
import { addSeperator } from 'utility/numbersDisplay'
import FavoriteHeart from './FavoriteHeart'
import { defaultImage } from 'images'
import { deleteItem } from 'requests/item.requests'
import DeatailedView from './DetailedView'

const FeedItem = (props) => {
    const [isDetailedView, setIsDetailedView] = useState(false)
    const { item, editable = false, favHeart = true} = props
    if (!item) { return null }
    const { location, rooms, floor, size, price} = item   
    const imgPath = (item.imageUrls && item.imageUrls.length > 0) ? item.imageUrls[0] : defaultImage.imgSrc
    const roomsLocalName = fetchFromResource('string', 'feedItem', 'rooms', 'localName')
    const floorLoaclName = fetchFromResource('string', 'feedItem', 'floor', 'localName')
    const sizeLocalName = fetchFromResource('string', 'feedItem', 'size', 'localName')
    const editLocalName = fetchFromResource('string', 'personal', 'delete', 'localName')
    const notAvailableLocalName = fetchFromResource('string', 'feedItem', 'notAvailable', 'localName')
    const noPriceLocalName = fetchFromResource('string', 'feedItem', 'noPrice', 'localName')
    const propertyType = item.propertyType ? item.propertyType : ''
    const street = location && location.split(',')[0] 
    const city = location && (location.split(',')[1] || '')
    const delItem = () => {
        deleteItem(item._id)
    }
    const toggleDetails = () => {
        setIsDetailedView(!isDetailedView)
    }
    return (
        <div className="item-view">
        {
            isDetailedView ?
            <DeatailedView item={item} toggleDetails={toggleDetails} /> :
            <div className="feed-item">
                <div className="feed-item__image">
                    <img src={imgPath} alt="pic" onClick={delItem}/>
                    {
                        favHeart &&
                        <FavoriteHeart item={item} />
                    }
                </div>
                <div className="feed-item__location" onClick={toggleDetails}>
                    <span className="feed-item__location__street">{street}</span> 
                    <span className="feed-item__location__city">{propertyType}{propertyType !== '' ? ', ':''} {city} </span> 
                </div>
                <div className="feed-item__rooms" onClick={toggleDetails}>
                    <span className="feed-item__rooms-number">{rooms || notAvailableLocalName}</span> 
                    <span className="feed-item__rooms-title">{roomsLocalName}</span>
                </div>
                <div className="feed-item__floor" onClick={toggleDetails}>
                    <span className="feed-item__floor-number">{floor || notAvailableLocalName}</span> 
                    <span className="feed-item__floor-title">{floorLoaclName}</span>
                </div>
                <div className="feed-item__size" onClick={toggleDetails}>
                    <span className="feed-item__size-number">{size || notAvailableLocalName}</span> 
                    <span className="feed-item__size-title">{sizeLocalName}</span>
                </div>
                <div className="feed-item__price" onClick={toggleDetails}>
                {
                    price ?
                    <span className="feed-item__price-number">{NIS}{addSeperator(price)}</span> :
                    <span className="feed-item__price-number">{noPriceLocalName}</span>
                }
                   
                </div>
                {   
                    editable &&
                    <div className="feed-item__edit-item">
                        <span className="feed-item__edit-item-button" onClick={delItem}>{editLocalName}</span>
                    </div>
                }
                
            </div>
        }  
        </div>
        
    )
}
export default FeedItem