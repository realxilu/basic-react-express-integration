import React from 'react'
import { useState, useEffect } from 'react'

const App = () => {
  const [msg, setMsg] = useState('loading...')

  const API_ENDPOINT = '/hello'

  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((r) => r.json())
      .then((r) => setMsg(r.msg))
  })

  return <div>{msg}</div>
}

export default App
