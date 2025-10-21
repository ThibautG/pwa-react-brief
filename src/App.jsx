import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [sondes, setSondes] = useState([])
  useEffect(() => {
    const fetchSondes = async () => {
      const response = await fetch (import.meta.env.VITE_API_URL + `/sondes`)
      const data = await response.json()
      setSondes(data.data)
    }
    fetchSondes()
  }, []);

  return (
    <>
    <h1>Brief PWA</h1>
    <ul>
      {sondes.map((s) => <li>hauteur: {s.haut}</li>)}
    </ul>

    </>
  )
}

export default App
