import './App.css'
import DataTab from "./components/DataTab.jsx";
import React from "react";

function App() {

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700 underline">
        Brief PWA
      </h1>
      <h2 className="text-xl font-bold mb-4 text-blue-700">
        Les sondes
      </h2>
      <DataTab apiUrl={'/sondes'}></DataTab>
      <h2 className="text-xl font-bold mt-8 mb-4 text-blue-700">
        Les toilettes
      </h2>
      <DataTab apiUrl={'/toilettes'}></DataTab>
    </div>
  )
}
export default App
