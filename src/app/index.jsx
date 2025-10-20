import React from 'react'
import AppRouter from './router.jsx'
import { Toaster } from 'sonner'
import AuthContextProvider from '@/lib/providers/authContextProvider.jsx'


const App = () => {
  return (
    <AuthContextProvider>
      <Toaster
        position="bottom-right"
        expand={false}
        richColors  
        closeButton
      />
      <AppRouter/>
    </AuthContextProvider>
  )
}

export default App