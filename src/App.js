import React from 'react'
import Home from './Screens/Home/Home'
import ProductDetails from './Screens/ProductDetails/ProductDetails'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




function App () {
  return (
    <>
  
    {/* <Home/> */}
    <Router>
        <Routes>
         
          <Route exact path="/" element={<Home/>} />
          <Route path='/productDetails' element={<ProductDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;


