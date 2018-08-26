const initialMessage = ''

// const setMessage = (message) => {
//   return {
//     type: 'SET_MESSAGE',
//     message
//   }
// }

// const removeMessage = () => {
//   return {
//     type: 'SET_MESSAGE',
//     message: ''
//   }
// }

const notify = (message, time) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_MESSAGE',
      message
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_MESSAGE',
        message: ''
      })
    }, time * 1000)
  }
}

const notificationReducer = (store = initialMessage, action) => {
  //console.log('ACTION: ', action)
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
    default:
      return store
  }
}

export default notificationReducer
export { notify }