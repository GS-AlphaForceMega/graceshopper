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
      <Sidebar />
      <AllProducts />
    </div>
  )
}

export default App
