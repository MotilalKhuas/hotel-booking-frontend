import React from 'react'
import AppRouter from './router.jsx'
import { Toaster } from 'sonner'


const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        expand={false}
        richColors  
        closeButton
      />
      <AppRouter/>
    </>
  )
}

export default App