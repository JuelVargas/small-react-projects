import React, { useState } from 'react'
import Modal from './modal'

const ModalTest= () => {


    const [showModalPoup, setShowModalPopup] = useState(false)

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPoup)
    }
    function onClose () {
        setShowModalPopup(false)
    }

  return (
    <div>
        <button onClick={handleToggleModalPopup}>
            Open Modal Popup
        </button>

        {showModalPoup && <Modal onClose={onClose}/>}

    </div>
  )
}

export default ModalTest
