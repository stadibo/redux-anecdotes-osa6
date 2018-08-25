const changeFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

const filterReducer = (store = '', action) => {
  //console.log('ACTION: ', action)
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return store
  }
}

export default filterReducer
export { changeFilter }