import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'

const QRCodeGenerator = () => {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode () {
        setQrCode(input)
        setInput('')
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input onChange={(e)=> setInput(e.target.value)} type="text" value={input} name='qr-code' placeholder='Enter your value here'/>
                <button 
                disabled={input && input.trim() !== "" ? false: true}
                onClick={handleGenerateQrCode}>Generate</button>
            </div>
            <div className='qr-code'>
                <QRCode
                    id='qr-code-value'
                    value={qrCode}
                    size={200}
                    bgColor='#fff'
                    level='M'
                />

            </div>
        </div>
    )
}

export default QRCodeGenerator