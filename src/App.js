import React from 'react'
import Home from './Screens/Home/Home'
import ProductDetails from './Screens/ProductDetails/ProductDetails'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProduct from './Screens/AllProduct/AllProduct';




function App () {
  return (
    <>
  
    {/* <Home/> */}
    <Router>
        <Routes>
         
          <Route exact path="/" element={<Home/>} />
          <Route path='/productDetails' element={<ProductDetails/>} />

          <Route path='/allProduct' element={<AllProduct/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;


