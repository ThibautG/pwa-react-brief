import { useState, useEffect } from 'react'
import './App.css'
import {getAllSondes} from "./services/sondesServices.jsx";

function App() {
  const [sondes, setSondes] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSondes = async () => {
      try {
        const data = await getAllSondes()
        setSondes(data)
      } catch (error) {
        console.error("Erreur lors du chargement des sondes", error)
      } finally {
        setIsLoading(false)
      }
    }
    void fetchSondes()
  }, []);

  if (isLoading) {
    return (
      <div className="overflow-x-auto shadow-lg rounded-2xl bg-gray-50 p-3.5">
        <p className={'text-xl italic'}>Chargement des données...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700 underline decoration-wavy">
        Brief PWA
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-2xl bg-white">
        <table className="w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg">
          <thead className="bg-gradient-to-r from-blue-600 to-blue-400 text-white uppercase text-xs tracking-wider">
          <tr>
            <th className="px-4 py-3">_id</th>
            <th className="px-4 py-3">owner</th>
            <th className="px-4 py-3">device_id</th>
            <th className="px-4 py-3">type</th>
            <th className="px-4 py-3">hauteur</th>
            <th className="px-4 py-3">volt</th>
            <th className="px-4 py-3">received_at</th>
            <th className="px-4 py-3">inserted_at</th>
          </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
          {sondes.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center py-6 text-gray-400">
                Aucun enregistrement trouvé
              </td>
            </tr>
          ) : (
            sondes.map((s) => (
              <tr
                key={s._id}
                className="hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 font-medium text-gray-800">{s._id}</td>
                <td className="px-4 py-3">{s.owner}</td>
                <td className="px-4 py-3">{s.device_id}</td>
                <td className="px-4 py-3">{s.type}</td>
                <td className="px-4 py-3">{s.haut}</td>
                <td className="px-4 py-3">{s.volt}</td>
                <td className="px-4 py-3 text-gray-500">{s.received_at}</td>
                <td className="px-4 py-3 text-gray-500">{s.inserted_at}</td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
