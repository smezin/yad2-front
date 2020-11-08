import { ItemContext } from 'context/ItemContext';
import React, { useContext} from 'react';
import ImageUploader from 'react-images-upload';
import { setImages } from 'actions/item.actions'
import fetchFromResource from 'utility/fetchFromResource';
 
const ImageUpload = () => {
  const { dispatch } = useContext(ItemContext)
  const label = fetchFromResource('string', 'personal', 'itemForm', 'imageUpload', 'label')
  const buttonText = fetchFromResource('string', 'personal', 'itemForm', 'imageUpload', 'buttonText')
  const fileTypeError = fetchFromResource('string', 'personal', 'itemForm', 'imageUpload', 'fileTypeError')
  
  const onDrop = (image) => {
    console.log(image)
    dispatch(setImages(image))
  } 
  
  return (
    <ImageUploader label={label} fileTypeError={fileTypeError}
      withIcon={true}
      withPreview={true}
      buttonText={buttonText} 
      onChange={onDrop}
      imgExtension={['.jpg', '.gif', '.png', '.gif']}
      maxFileSize={5242880}
    />
  )    
}
export default ImageUpload