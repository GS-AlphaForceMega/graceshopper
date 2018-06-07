import React from 'react'

import {Navbar} from './components'
// import Routes from './routes'
import AllProducts from './components/allProducts.js'
import Sidebar from './components/sidebar.js'
import Cart from './components/Cart.js'
import {Route, Redirect} from 'react-router-dom'
import EditProduct from './components/editProduct'
import AddProduct from './components/addProduct'
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
        <Sidebar />
{/*          <Route exact path="/products" component={AllProducts} /> */}

      {/* <Routes /> */}
{/*        <Sidebar /> */}
      <Route exact path="/"component={AllProducts} />
      <Route exact path="/products" component={AllProducts} />
      <Route exact path="/edit/products/:productId" component={EditProduct} />
      <Route exact path="/add/product" component={AddProduct} />
      <Route exact path="/products/:productId" component={SingleProduct} />
      <Route exact path="/cart" component={Cart} />
      {/* <Route component={AllProducts} /> */}
      </div>
    </div>
  )
}

export default App
