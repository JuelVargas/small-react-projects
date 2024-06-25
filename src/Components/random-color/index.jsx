
import { useEffect, useState } from 'react';

const RandomColor = () => {
    const [colorType, setColorType] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleCreateHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#"
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor)
    }
    function handleCreateRgbColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if (colorType === "rgb") handleCreateRgbColor();
        else handleCreateHexColor();

    }, [colorType])

    return (
        <div
            className="container"
            style={{
                width: "width",
                height: "100vh",
                background: color,
            }}
        >
            <button onClick={() => setColorType('hex')} >Create HEX color</button>
            <button onClick={() => setColorType('rgb')} >Create RGB color</button>
            <button onClick={colorType === "hex" ? handleCreateHexColor: handleCreateRgbColor } >Generate Random Color</button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '50px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{colorType}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor