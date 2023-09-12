import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Count from './count.jsx'
import Friends from './friends.jsx'
function App() {
  function handleClick() {
    setCount(count + 1)
  }
    const handleClick2 = () => {
      alert('Hello World')
    }
  return (
    <>
      
      <h1> React Core Concepts</h1>
      <Friends></Friends>
      <Count></Count>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
    </>
  )
}

export default App
