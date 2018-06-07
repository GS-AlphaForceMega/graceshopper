import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import AllProducts from './components/allProducts.js'
import Sidebar from './components/sidebar.js'


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes /> */}
      <div className="middle-section">
        <Sidebar />
        <AllProducts />
      </div>
    </div>
  )
}

export default App
