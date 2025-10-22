import './App.css'
import DataTab from "./components/DataTab.jsx";
import React, {useState} from "react";
import {ReloadPrompt} from "./Prompt.jsx";

function App() {
  const [route, setRoute] = useState('/sondes')
  console.log(route)

  return (
    <>
      <ReloadPrompt></ReloadPrompt>

      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700 underline">
          Brief PWA
        </h1>
        <nav className={'flex mb-4'}>
          <ul className={'flex'}>
            <li className={'mr-3'}>
              <button onClick={() => setRoute('/sondes')}
                      className={`px-4 py-2 rounded-lg font-semibold transition 
                        ${route === "/sondes"
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white text-blue-700 border border-blue-600 hover:bg-blue-100"}`}
              >
                Sondes
              </button>
            </li>
            <li>
              <button onClick={() => setRoute('/toilettes')}
                      className={`px-4 py-2 rounded-lg font-semibold transition 
                        ${route === "/toilettes"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-blue-700 border border-blue-600 hover:bg-blue-100"}`}
              >
                Toilettes
              </button>
            </li>
          </ul>
        </nav>
        <DataTab apiUrl={route}></DataTab>
      </div>
    </>
  )
}
export default App
