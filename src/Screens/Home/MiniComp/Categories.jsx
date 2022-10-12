import React, { useEffect, useState } from 'react'
 
import './categorie.css';

function Categories() {

    const [data, setData] = useState([])

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            setData(olddata=>[...olddata,`cat ${i}`])
            // data.push('cat ' + i)
            console.log(i)
        }
    }, [])

    console.log(data)

    return (
        <div className='cat-container'>
 
            {data &&data.map((props, index) =>
                <div key={index} className='cate'>
                    { props}
                </div>)}


        </div>
    )
}

export default Categories