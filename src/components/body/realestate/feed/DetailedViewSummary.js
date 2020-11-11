import { defaultImage } from 'images'
import React, { useState } from 'react'
import { NIS, phone } from 'resources/specialChars'
import fetchFromResource from 'utility/fetchFromResource'
import { addSeperator } from 'utility/numbersDisplay'
import FavoriteHeart from './FavoriteHeart'

const DetailedViewSummary = (props) => {
  const [isPhoneHidden, setIsPhoneHidden] = useState(true)
  const { item, toggleDetails } = props
  if (!item) { return null }
  const { location, rooms, floor, size, price, createdAt, ownerMobile} = item   
  const imgPath = (item.imageUrls && item.imageUrls.length > 0) ? item.imageUrls[0] : defaultImage.imgSrc
  const propertyType = item.propertyType ? item.propertyType : ''
  const street = location && location.split(',')[0] 
  const city = location && (location.split(',')[1] || '')
  const notAvailable = fetchFromResource('string', 'feedItem', 'notAvailable', 'localName')
  const roomsLocalName = fetchFromResource('string', 'feedItem', 'rooms', 'localName')
  const floorLoaclName = fetchFromResource('string', 'feedItem', 'floor', 'localName')
  const sizeLocalName = fetchFromResource('string', 'feedItem', 'size', 'localName')
  const updatedTodayLocalName = fetchFromResource('string', 'feedItem', 'updatedToday', 'localName')
  const updatedAtLocalName = fetchFromResource('string', 'feedItem', 'updatedAt', 'localName')
  const showPhoneNumberLocalName = fetchFromResource('string', 'feedItem', 'showPhoneNumber', 'localName')
  const noPriceLocalName = fetchFromResource('string', 'feedItem', 'noPrice', 'localName')
  const intlDate = new Intl.DateTimeFormat('he-IL', {dateStyle: 'long'}).format(new Date(createdAt)) 
  const isToday = ((new Date()-new Date(createdAt))/(1000 * 60 * 60 * 24)) < 1
  const showPhoneNumber = () => {
    setIsPhoneHidden(false)
  }
  return(
    <div className="summary">
      <div className="summary__right" onClick={toggleDetails}>
        <div className="summary__right__image" onClick={toggleDetails}>
          <img src={imgPath} alt="pic" />
          <FavoriteHeart favoriteItem={item} />
        </div>
        <div className="summary__right__details">
          <div className="summary__right__address"> 
            <span className="feed-item__location__street">{street}</span> 
            <span className="feed-item__location__city">{propertyType}{propertyType !== '' ? ', ':''} {city} </span> 
          </div>
          <div className="summary__right__info-blocks">
            <div className="summary__right__info-blocks__item">
              <span className="value">{rooms || notAvailable}</span>
              <span className="title">{roomsLocalName}</span>
            </div>
            <div className="summary__right__info-blocks__item">
              <span className="value">{floor || notAvailable}</span>
              <span className="title">{floorLoaclName}</span>
            </div>
            <div className="summary__right__info-blocks__item">
              <span className="value">{size || notAvailable}</span>
              <span className="title">{sizeLocalName}</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className="summary__left">
        <div className="summary__left__price"  onClick={toggleDetails}>
        {
          price ?
          <span>{NIS}{addSeperator(price)}</span> :
          <span>{noPriceLocalName}</span>
        }
          
        </div>
        <div className="updated-at"  onClick={toggleDetails}>
          {isToday ? updatedTodayLocalName : updatedAtLocalName+intlDate}
        </div>
        <div className="show-phone-number" onClick={showPhoneNumber}>
          {phone}{isPhoneHidden ? showPhoneNumberLocalName : ownerMobile}
        </div>
      </div>
    </div>
  )
}
export default DetailedViewSummary