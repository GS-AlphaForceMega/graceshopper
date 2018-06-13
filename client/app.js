import React from 'react'

import { Navbar } from './components'
// import Routes from './routes'
import { AllProducts, AddProduct, EditProduct, SingleProduct } from './components/products'
import Sidebar from './components/Sidebar.jsx'
import Cart from './components/Cart.jsx'
import { Route, Redirect } from 'react-router-dom'
import { Login, Signup } from './components/AuthForm.jsx'
import  UserHome  from './components/UserHome.jsx';
import OrderHistory from './components/OrderHistory.jsx'
import Footer from './components/Footer.jsx'
import AdminAllOrders from './components/AdminAllOrders.jsx';

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
        <Route exact path="/" component={AllProducts} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/home" component={AllProducts} />
        <Route exact path="/edit/products/:productId" component={EditProduct} />
        <Route exact path="/add/product" component={AddProduct} />
        <Route exact path="/products/:productId" component={SingleProduct} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/user/:id" component={UserHome} />
        <Route exact path="/order/history" component={OrderHistory} />
        <Route exact path="/order/all" component={AdminAllOrders} />
        {/* <Route component={AllProducts} /> */}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
