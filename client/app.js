import React from 'react'

import {Navbar} from './components'
// import Routes from './routes'
import AllProducts from './components/allProducts.js'
import Sidebar from './components/sidebar.js'
import Cart from './components/Cart.js'
import {Route, Redirect} from 'react-router-dom'
import EditProduct from './components/editProduct'
import AddProduct from './components/addProduct'
import { Login, Signup } from './components/auth-form'
import SingleProduct from './components/singleProduct'

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       {/* <Routes /> */}
//       <div className="middle-section">
//         <Sidebar />
//         <AllProducts />
//       </div>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="middle-section">
      
{/*          <Route exact path="/products" component={AllProducts} /> */}

      {/* <Routes /> */}
{/*        <Sidebar /> */}

{/*  CG: MAKE SINGLE SOURCE OF ROUTING FOR MAJOR ROUTES */}
      <Route exact path="/"component={AllProducts} />
      <Route exact path="/products" component={AllProducts} />
      {/*  CG: MAKE FE routes restful too. /products/:productId/edit */}
      <Route exact path="/edit/products/:productId" component={EditProduct} />
      <Route exact path="/add/product" component={AddProduct} />
      <Route exact path="/products/:productId" component={SingleProduct} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      {/* <Route component={AllProducts} /> */}
      </div>
    </div>
  )
}

export default App
