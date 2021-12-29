import React from 'react'

const Notification = ({ message, messageType }) => {
  const normalStyle = {
    color: '#82B366',
    background: '#D5E8D4',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }
  const errorStyle = {
    color: '#b85450',
    background: '#f8cecc',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  // console.log(`message`, message);
  // console.log(`messageType`, messageType);

  if (messageType === undefined) {
    return message
  }
  if (messageType) {
    return <div style={normalStyle}>{message}</div>
  }
  return <div style={errorStyle}>{message}</div>
}

export default Notification
