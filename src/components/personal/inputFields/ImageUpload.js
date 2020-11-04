import { ItemContext } from 'context/ItemContext';
import React, { useContext} from 'react';
import ImageUploader from 'react-images-upload';
import { setImage } from 'actions/item.actions'
 
const ImageUpload = () => {
  const { dispatch } = useContext(ItemContext)
  
  const onDrop = (image) => {
    dispatch(setImage(image))
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