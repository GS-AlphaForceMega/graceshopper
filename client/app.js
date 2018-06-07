import React from 'react'

import {Navbar} from './components'
// import Routes from './routes'
import AllProducts from './components/allProducts.js'
import Sidebar from './components/sidebar.js'
import Cart from './components/Cart.js'
import {Route, Redirect} from 'react-router-dom'

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
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  )
}

export default App
