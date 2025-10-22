const API_ENV_URL = import.meta.env.VITE_API_URL

/**
 * Fetches all data from the specified API endpoint.
 * @param {string} apiUrl - API route to request data from.
 * @returns {Promise<Object[]>} Promise resolving with the data array.
 * @throws {Error} If the fetch request fails.
 */
export const getAllDatas = async (apiUrl) => {
  const response = await fetch (`${API_ENV_URL}${apiUrl}`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Erreur lors du fetch')
  }
  return data.data
}