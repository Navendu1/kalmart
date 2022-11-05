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
                <div key={index} className="cat">
                    <img
                     className='cate'
                    src='https://www.block-machine.net/wp-content/uploads/2019/05/3-QT4-25C-Automatic-Brick-Making-Machine.jpg' alt="categories" />
                  <text style={{fontSize:'12px',textAlign:'center',fontWeight:'bold'}}> {" briks machine"}  </text>  
                </div>)}


        </div>
    )
}

export default Categories