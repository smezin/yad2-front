import { ItemContext } from 'context/ItemContext';
import React, { useContext } from 'react';
import ImageUploader from 'react-images-upload';
import { setImage } from 'actions/item.actions'
 
const ImageUpload = () => {
  
  const { item, dispatch } = useContext(ItemContext)
  const itemId = item._id
  
  const onDrop = (image) => {
    dispatch(setImage(image))
    console.log(itemId)
  } 
  return (
    <ImageUploader
      withIcon={true}
      buttonText='Choose images'
      onChange={onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
    />
  )    
}
export default ImageUpload