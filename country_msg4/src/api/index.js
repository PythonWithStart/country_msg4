import axios from 'axios'

export const getTours = () => {
  return axios.get('/api/tours').catch(error => {
    console.error('API error:', error)
    throw error // Re-throw to handle it in the calling component
  })
}
