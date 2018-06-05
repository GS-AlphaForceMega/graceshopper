import React from 'react'

import {Navbar} from './components'
import {Sidebar} from './components/sidebar'
import Routes from './routes'


const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes />
    </div>
  )
}

export default App
