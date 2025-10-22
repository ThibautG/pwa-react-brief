import React, { useState, useEffect } from 'react'
import {getAllDatas} from "../services/dataServices.jsx";
import ProbsTab from "./ProbsTab.jsx";
import BathroomsTab from "./BathroomsTab.jsx";

/**
 * Fetches and displays sensor data based on the API route.
 * @param {string} apiUrl - API endpoint to fetch data from.
 * @returns {JSX.Element} Rendered data table component.
 */
function DataTab({apiUrl}) {
  // storing the datas from the api in the stat
  const [sensorDatas, setSensorDatas] = useState([])
  // loading stat for UX
  const [isLoading, setIsLoading] = useState(true)

  // fetching datas using the services and dealing with errors
  useEffect(() => {
    const fetchSondes = async () => {
      try {
        // fetching api from services
        const data = await getAllDatas(apiUrl)
        // setting response data in the state
        setSensorDatas(data)
      } catch (error) {
        // catching error
        console.error("Erreur lors du chargement des données", error)
      } finally {
        // reinitialise the loading state
        setIsLoading(false)
      }
    }
    void fetchSondes()
  }, [apiUrl]);

  // dealing with data loading
  if (isLoading) {
    return (
      <div className="overflow-x-auto shadow-lg rounded-2xl bg-gray-50 p-3.5">
        <p className={'text-xl italic'}>Chargement des données...</p>
      </div>
    )
  }

  // calling different component according to apiUrl props
  // ProbsTab and BathroomTab are only dealing with displaying the datas
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
