import React from 'react'

const AlertBox = ({text}) => {
  return (
    <div className="alert alert-rounded alert-danger">
    <i className="fa fa-exclamation-circle" style={{ color: "#ef8495" }} />
    <span>
      <strong>{text}</strong> 
    </span>
  </div>
  )
}

export default AlertBox