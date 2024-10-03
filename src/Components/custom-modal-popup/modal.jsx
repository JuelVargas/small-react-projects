import React from 'react'
import './modal.css'

const Modal = ({id, header, body, footer, onClose}) => {
  return (
    <div id={id || 'Modal' } className='modal'>
        <div className="modal-content">
                <span className='close-modal-icon' onClick={onClose}>&times;</span>
            <div className="header">
                <h2>{header ? header: 'Header'}</h2>
            </div>
            <div className="body">
                {
                    body? body: <div>
                        <p>this is our Modal Body</p>
                    </div>
                }

            </div>
            <div className="footer">
                {
                    footer? footer: (<div>
                        <p>This is our Modal Footer</p>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Modal