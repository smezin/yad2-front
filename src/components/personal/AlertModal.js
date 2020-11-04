import React from 'react'
import fetchFromResource from 'utility/fetchFromResource'

const AlertModal = (props) => {
  const { missing, resetMissingFields } = props
  const headerLocalName = fetchFromResource('string', 'personal', 'missingFields', 'headerLocalName')

  return ( 
    <div className="alert-modal" onClick={resetMissingFields}>
      <div className="modal-content">
        <span className="missing-header">{headerLocalName}</span>
        {
          missing.map((field) => <div className="missing-field" key={field}>{field}</div>)
        }
      </div>
    </div>
  )
}

export default AlertModal