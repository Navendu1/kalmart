import React, { useEffect, useState } from 'react'

import './categorie.css';
import { useNavigate } from "react-router-dom";

function Categories({ props }) {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const newdata=[]

        props.forEach(element => {
            // newdata.push(element["name"])
            if (!newdata.find(e => e == element.categoris)) {
              newdata.push(element.categoris)
            }
        });

        setData(newdata)
        //console.log(newdata)

    }, [])


    // console.log(data)

    const gotocategorisProduct = (e) => {

        const data = props.filter((items) => items.categoris == e)
        navigate('/allProduct', { state: data })

        console.log(e)
    }

    return (
        <div className='cat-container'>

            {data && data.map((props, index) =>
                <div
                    onClick={() => gotocategorisProduct(props)}
                    key={index} className="cat clickP">
                    <img
                        className='cate'
                        src='https://www.block-machine.net/wp-content/uploads/2019/05/3-QT4-25C-Automatic-Brick-Making-Machine.jpg' alt="categories" />

                    <text style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>

                        {props}

                    </text>
                </div>)}


        </div>
    )
}

export default Categories