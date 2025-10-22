const API_ENV_URL = import.meta.env.VITE_API_URL

export const getAllDatas = async (apiUrl) => {
  const response = await fetch (`${API_ENV_URL}${apiUrl}`)
  const data = await response.json()
  if (!response.ok) {
    throw new Error('Erreur lors du fetch')
  }
  return data.data
}