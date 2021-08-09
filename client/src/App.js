import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [msg, setMsg] = useState('loading...')

  useEffect(() => {
    fetch('/hello')
      .then((res) => res.json())
      .then((res) => setMsg(res.msg))
  })

  return <h1>{msg}</h1>
}

export default App
