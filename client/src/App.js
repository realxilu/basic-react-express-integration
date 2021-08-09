import { useState, useEffect } from 'react'

const App = () => {
  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    fetch('/hello')
      .then((res) => res.json())
      .then((res) => setMsg(res.msg))
  })

  return <h1>{msg}</h1>
}

export default App
