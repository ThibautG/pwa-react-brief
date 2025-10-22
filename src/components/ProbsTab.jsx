import React from 'react';

function ProbsTab({probsDatas}) {
  return (
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
          {probsDatas.length === 0 ? (
            <tr>
              <td colSpan="8" className="text-center py-6 text-gray-400">
                Aucun enregistrement trouvé
              </td>
            </tr>
          ) : (
            probsDatas.map((s) => (
              <tr
                key={s._id}
                className="hover:bg-blue-50 transition-colors duration-150"
              >
                <td className="px-4 py-3 font-medium text-gray-800">{s._id}</td>
                <td className="px-4 py-3">{s.owner}</td>
                <td className="px-4 py-3">{s.device_id}</td>
                <td className="px-4 py-3">{s.type}</td>
                <td className="px-4 py-3">{s.haut} m</td>
                <td className="px-4 py-3">{s.volt}</td>
                <td className="px-4 py-3 text-gray-500">{s.received_at}</td>
                <td className="px-4 py-3 text-gray-500">{s.inserted_at}</td>
              </tr>
            ))
          )}
          </tbody>
        </table>
      </div>
  );
}

export default ProbsTab;