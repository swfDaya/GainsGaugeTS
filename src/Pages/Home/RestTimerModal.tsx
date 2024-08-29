import React from 'react'
import './RestTimerModal.css'

const RestTimerModal = ({isRestTimerModalShow}:{isRestTimerModalShow: boolean}) => {
  return (
    <div
    className = 'rest__timer__modal__base'
    style = {{
        display: isRestTimerModalShow ? "flex" : "none"
    }}
    >
      
    </div>
  )
}

export default RestTimerModal
