import './App.css'
import DataTab from "./components/DataTab.jsx";
import React, {useState} from "react";
import {ReloadPrompt} from "./Prompt.jsx";

/**
 * Root application component.
 * @returns {JSX.Element} The rendered root layout of the PWA.
 */
function App() {
  /**
   * storing the api route in the state for the navbar
   * */
  const [route, setRoute] = useState('/sondes')

  /**
   * sends a browser notification if permission is granted
   * */
  const sendNotification = () => {
      Notification.requestPermission().then((result) => {
        if (result === "granted") {
          new Notification('Ceci est une notification', {});
        }
      });
    };

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
              {/* modifying the route with the setter */}
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
              {/* modifying the route with the setter */}
              <button onClick={() => setRoute('/toilettes')}
                      className={`px-4 py-2 rounded-lg font-semibold transition 
                        ${route === "/toilettes"
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-blue-700 border border-blue-600 hover:bg-blue-100"}`}
              >
                Toilettes
              </button>
            </li>
            <li className={'ml-6'}>
              {/* sending notification */}
              <button onClick={() => sendNotification()}
                      className={`px-4 py-2 rounded-lg font-semibold transition bg-white text-blue-700 border border-blue-600 hover:bg-blue-100`}
              >
                Notification
              </button>
            </li>
          </ul>
        </nav>
        {/* on usage of the DataTab component using the state in props */}
        <DataTab apiUrl={route}></DataTab>
      </div>
    </>
  )
}
export default App
