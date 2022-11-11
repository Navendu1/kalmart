import React from 'react'
import { Color } from '../Color'
import { useNavigate } from "react-router-dom";


const headerStyle = { backgroundColor:Color.TrueBlue, padding: 10, color: "white", display: 'flex', justifyContent: "space-around",marginBottom:'10px' }

function Hader() {
    let navigate = useNavigate();



    return (
        <>
            <div style={headerStyle}>
                <div onClick={()=>navigate('/')}>
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