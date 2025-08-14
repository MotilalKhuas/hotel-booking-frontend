import React from 'react'
import Home from './home/index.jsx'
import {SignInPage, SignUpPage} from './auth/index.jsx'
import HotelDetails from './hotel-details/index.jsx'
import Header from '@/components/layouts/header.layout.jsx'
import Footer from '@/components/layouts/footer.layout.jsx'


const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        {/* <HotelDetails/>
        <SignInPage/>
        <SignUpPage/> */}
        <Footer/>
    </div>
  )
}

export default App