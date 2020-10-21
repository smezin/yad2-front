import React from 'react'
import { NIS } from 'resources/specialChars'
import fetchFromResource from 'utility/fetchFromResource'
import { addSeperator } from 'utility/numbersDisplay'

const FeedItem = (props) => {
    const { item } = props
    const { location, rooms, floor, size, price} = item.properties
    const imgPath = item.images[0]
    const roomsLoaclName = fetchFromResource('string', 'feedItem', 'rooms', 'localName')
    const floorLoaclName = fetchFromResource('string', 'feedItem', 'floor', 'localName')
    const sizeLoaclName = fetchFromResource('string', 'feedItem', 'size', 'localName')
    const street = location.split(',')[0]
    const city = location.split(',')[1] || ''
    return (
        <div className="feed-item">
            <div className="feed-item__image">
                <img src={imgPath} alt="pic" />
            </div>
            <div className="feed-item__location">
                <span className="feed-item__location__street">{street}</span> 
                <span className="feed-item__location__city">{city} </span> 
            </div>
            <div className="feed-item__rooms">
                <span className="feed-item__rooms-number">{rooms}</span> 
                <span className="feed-item__rooms-title">{roomsLoaclName}</span>
            </div>
            <div className="feed-item__floor">
                <span className="feed-item__floor-number">{floor}</span> 
                <span className="feed-item__floor-title">{floorLoaclName}</span>
            </div>
            <div className="feed-item__size">
                <span className="feed-item__size-number">{size}</span> 
                <span className="feed-item__size-title">{sizeLoaclName}</span>
            </div>
            <div className="feed-item__price">
                <span className="feed-item__price-number">{NIS}{addSeperator(price)}</span>
            </div>
        </div>
    )
}
export default FeedItem