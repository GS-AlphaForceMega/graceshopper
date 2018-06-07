import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import AllProducts from './components/allProducts.js'
import Sidebar from './components/sidebar.js'
import EditProduct from './components/editProduct'
import AddProduct from './components/addProduct'
import {Route} from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Sidebar />
      <Route exact path="/"component={AllProducts} />
      <Route exact path="/products" component={AllProducts} />
      <Route exact path="/edit/products/:productId" component={EditProduct} />
      <Route exact path="/add/product" component={AddProduct} />
      {/* <Route component={AllProducts} /> */}
    </div>
  )
}

export default App
