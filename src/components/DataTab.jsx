import React, { useState, useEffect } from 'react'
import {getAllDatas} from "../services/dataServices.jsx";
import ProbsTab from "./ProbsTab.jsx";
import BathroomsTab from "./BathroomsTab.jsx";

function DataTab({apiUrl}) {
  const [sensorDatas, setSensorDatas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSondes = async () => {
      try {
        const data = await getAllDatas(apiUrl)
        setSensorDatas(data)
      } catch (error) {
        console.error("Erreur lors du chargement des données", error)
      } finally {
        setIsLoading(false)
      }
    }
    void fetchSondes()
  }, [apiUrl]);

  if (isLoading) {
    return (
      <div className="overflow-x-auto shadow-lg rounded-2xl bg-gray-50 p-3.5">
        <p className={'text-xl italic'}>Chargement des données...</p>
      </div>
    )
  }

  if (apiUrl === '/sondes') {
    return (
      <ProbsTab probsDatas={sensorDatas}></ProbsTab>
    )
  }

  if (apiUrl === '/toilettes') {
    return (
      <BathroomsTab bathroomsDatas={sensorDatas}></BathroomsTab>
    )
  }

}

export default DataTab
