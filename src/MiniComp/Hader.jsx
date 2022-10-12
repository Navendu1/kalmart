import React from 'react'
import { Color } from '../Color'


const headerStyle = { backgroundColor:Color.TrueBlue, padding: 10, color: "white", display: 'flex', justifyContent: "space-around" }

function Hader() {

    return (
        <>
            <div style={headerStyle}>
                <div>
                 {/* onclick  goto home page*/}
                    brand logo
                </div>
                <div>
                    {/* onclick  goto login page*/}
                    login
                </div>
            </div>
        </>
    )
}

export default Hader