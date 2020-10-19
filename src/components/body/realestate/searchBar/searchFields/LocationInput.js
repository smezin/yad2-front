import React, { useState, useEffect } from 'react' 
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


const LocationSearchInput = (props) => {
  const { category, localLoading, placeholderLocalName, setLocation, dispatch } = props
  const [address, setAddress] = useState('')
  
  const handleChange = (address) => {
    setAddress(address) 
    dispatch(setLocation (address))
  }

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(() => dispatch(setLocation (address)))
      .catch(error => console.error('Error', error)) //remove to global error handler
    setAddress( address )
  }

  useEffect ( () => {
    setAddress('')
  },[category])

  return (
    <PlacesAutocomplete 
      value={address}
      onChange={handleChange}
      searchOptions={{
          types: ['address'],
          componentRestrictions: { country: "il" }
      }}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="location-input__container">
          <input spellCheck="false"
            {...getInputProps({
              placeholder: placeholderLocalName,
              className: `location-input__bar ${address === '' ? '' : 'has-data'}`,
            })}
          />
          <div id="autocomplete-dropdown-container" >
            {loading && <div>{localLoading}</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item__active'
                : 'suggestion-item' 
              
              return (
                <div 
                  {...getSuggestionItemProps(suggestion, {
                    className,                 
                  })}
                >
                  <span className={`description-${className}`}>{suggestion.description}</span>
                </div>
              ) 
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  ) 
}

export default LocationSearchInput
