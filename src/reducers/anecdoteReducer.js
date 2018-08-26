// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

//const initialState = anecdotesAtStart.map(asObject)

//const getId = () => (100000 * Math.random()).toFixed(0)


const anecdoteInit = (data) => {
  return {
    type: 'INIT_ANECDOTES',
    data
  }
}

const createAnecdote = (data) => {
  return {
    type: 'CREATE',
    data
  }
}

const voteOnAnecdote = (data) => {
  return { type: 'VOTE', data }
}

const anecdoteReducer = (store = [], action) => {
  //console.log('ACTION: ', action)
  if (action.type === 'VOTE') {
    const old = store.filter(a => a.id !== action.data.id)
    //const voted = store.find(a => a.id === action.id)

    return [...old, action.data]
  }
  if (action.type === 'CREATE') {

    return [...store, action.data]
  }
  if (action.type === 'INIT_ANECDOTES') {

    return action.data
  }

  return store
}

export default anecdoteReducer
export { createAnecdote, voteOnAnecdote, anecdoteInit }