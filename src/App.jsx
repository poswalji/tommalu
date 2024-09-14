import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import ExploreMenu from './components/ExploreMenu/ExploreMenu'
import Footer from './components/footer/Footer'
import AppDownload from './components/appDownload/AppDownload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
     <Navbar/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceOrder/>}/>
     </Routes>
     <AppDownload/>
    </div>
    <Footer/>
    </>
  )
}

export default App
