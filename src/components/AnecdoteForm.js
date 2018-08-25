import React from 'react'
import PropTypes from 'prop-types'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

class AnecdoteForm extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.context.store.dispatch(createAnecdote(content))

    e.target.anecdote.value = ''
    this.context.store.dispatch(setMessage(`'${content}' created`))
    setTimeout(() => {
      this.context.store.dispatch(removeMessage())
    }, 5000)
  }
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

AnecdoteForm.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteForm
