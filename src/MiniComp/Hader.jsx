import React from 'react'
import { Color } from '../Color'
import { useNavigate } from "react-router-dom";

import logo from '../Data/images/msmaitilogo.png'

const headerStyle = { backgroundColor:Color.TrueBlue, color: "white", display: 'flex', justifyContent: "space-around", marginBottom:'10px' }

function Hader() {
    let navigate = useNavigate();

    return (
        <>
            <div style={headerStyle}>
                <div className='click' onClick={()=>navigate('/')}>
                 {/* onclick  goto home page*/}
                    <img src={logo} alt="" style={{height:"30px",width:'30px'}} />
                </div>
                <div className='click'>
                    {/* onclick  goto login page*/}
                    login
                </div>
            </div>
        </>
    )
}

export default Hader