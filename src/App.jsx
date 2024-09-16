import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'

import Footer from './components/footer/Footer'
import AppDownload from './components/appDownload/AppDownload'

import LoginPopup from './components/loginPopup/LoginPopup'

function App() {
     const [showPopup, setShowPopup] = useState(false); // State to toggle popup visibility

   


  return (
    <>
    {showPopup && <LoginPopup onClose={() => setShowPopup(false)} />} 
    <div className='app'>
     <Navbar setShowPopup={setShowPopup}/>
     
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
