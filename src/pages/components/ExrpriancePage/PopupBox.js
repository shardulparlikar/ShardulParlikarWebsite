import React from 'react'

const PopupBox = ({isOpen, onClose, customProp}) => {
  
    if (!isOpen) {
        return null;
    }
  return (
    <div className='text-2xl'>{customProp.companyName}</div>
  )
}

export default PopupBox