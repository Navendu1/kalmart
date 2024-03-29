import React from 'react'
import Home from './Screens/Home/Home'
import ProductDetails from './Screens/ProductDetails/ProductDetails'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllProduct from './Screens/AllProduct/AllProduct';
import { ModelData } from './Data/DemoData';
import Footer from './MiniComp/Footer/Footer';



function App () {
  

  return (
    <>
   jjj
        <Router>
        <Routes>
         
          <Route exact path="/" element={<Home data={ModelData} />} />

          <Route path='/productDetails/:id' element={<ProductDetails/>} />
          
          <Route path='/allProduct' element={<AllProduct/>} />
        </Routes>
       
       <Footer/>

      </Router>
    </>
  )
}

export default App;


