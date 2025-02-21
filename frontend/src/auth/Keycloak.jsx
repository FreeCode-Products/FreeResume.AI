import React from 'react'
import UseAuth from './hooks/UseAuth'
import Public from "./components/Public"
import Protected from './components/Protected';

const App = () => {

  const isLogin = UseAuth();
  
  return (
    isLogin ? <Public/>   : <Protected/>
  )
}

export default App