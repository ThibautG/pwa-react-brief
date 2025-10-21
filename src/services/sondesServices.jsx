const API_URL = import.meta.env.VITE_API_URL


export const getAllSondes = async () => {
  const response = await fetch (`${API_URL}/sondes`)
  const data = await response.json()
  return data.data
}