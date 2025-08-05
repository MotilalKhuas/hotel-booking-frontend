import React from 'react'
import Home from './home/index.jsx'
import Header from '@/components/layouts/header.layout.jsx'
import Footer from '@/components/layouts/footer.layout.jsx'

const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App