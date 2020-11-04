import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const AlertModal = (props) => {
  const { missing, resetMissingFields } = props
  const headerLocalName = fetchFromResource('string', 'personal', 'missingFields', 'headerLocalName')

  return ( 
    <div className="alert-modal" onClick={resetMissingFields}>
      <ul className="modal-content">
        <span className="missing-fields-header">{headerLocalName}</span>
        {
          missing.map((field) => <li className="missing-field-text" key={field}>{field}</li>)
        }
      </ul>
    </div>
  )
}

export default AlertModal