import { useState, useEffect } from 'react'
import './App.css'
import {getAllSondes} from "./services/sondesServices.jsx";

function App() {
  const [sondes, setSondes] = useState([])
  console.log(sondes)
  useEffect(() => {
    const fetchSondes = async () => {
      const data = await getAllSondes()
      console.log('data', data)
      setSondes(data)
    }
    fetchSondes()
  }, []);

  return (
    <>
      <h1 className={'text-3xl font-bold underline'}>Brief PWA</h1>
      <table className={'table'}>
        <thead>
        <tr>
          <th>_id</th>
          <th>owner</th>
          <th>device_id</th>
          <th>type</th>
          <th>hauteur</th>
          <th>volt</th>
          <th>received_at</th>
          <th>inserted_at</th>
        </tr>
        </thead>
        <tbody>
        {sondes.map((s) =>
          <tr>
            <td>{s._id}</td>
            <td>{s.owner}</td>
            <td>{s.device_id}</td>
            <td>{s.type}</td>
            <td>{s.haut}</td>
            <td>{s.volt}</td>
            <td>{s.received_at}</td>
            <td>{s.inserted_at}</td>
          </tr>
        )}
        </tbody>
      </table>

    </>
  )
}

export default App
