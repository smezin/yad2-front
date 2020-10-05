import React, { useState, useContext } from 'react' 
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import fetchFromResource from 'utility/fetchFromResource'
import { setLocation } from 'actions/filters'
import { FiltersContext } from 'context/FiltersContext'

const LocationSearchInput = () => {
  const [address, setAddress] = useState('')
  const localLoading = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localLoading') 
  const localPlaceholder = fetchFromResource('string', 'realestateSearchBar', 'searchFields', 'location', 'localPlaceholder') 
  const { filters, dispatch } = useContext(FiltersContext)
  
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
  console.log('filters: ', filters)
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
        <div className="location-input__container" dir="rtl">
          <input spellCheck="false"
            {...getInputProps({
              placeholder: localPlaceholder,
              className: 'location-input__field',
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
