import axios from 'axios'
const baseURL = 'http://localhost:3001'

const getAll = async () => {
  const response = await axios.get(`${baseURL}/anecdotes`)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(`${baseURL}/anecdotes`, { content, votes: 0 })
  return response.data
}

const update = async (anecdote) => {
  const updated = { ...anecdote, votes: anecdote.votes + 1 }
  const response = await axios.put(`${baseURL}/anecdotes/${anecdote.id}`, updated)
  return response.data
}

export default { getAll, createNew, update }