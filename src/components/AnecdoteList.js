import React from 'react'
import PropTypes from 'prop-types'
import { voteOnAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  vote = (anecdote) => () => {
    this.context.store.dispatch(voteOnAnecdote(anecdote.id))
    this.context.store.dispatch(setMessage(`you voted '${anecdote.content}'`))
    setTimeout(() => {
      this.context.store.dispatch(removeMessage())
    }, 5000)
  }

  render() {
    const anecdotesToShow = () => {
      const { anecdotes, filter } = this.context.store.getState()
      
      if (filter === '') {
        return anecdotes
      }

      return anecdotes.filter(a => a.content.includes(filter))
    }

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote)}>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

AnecdoteList.contextTypes = {
  store: PropTypes.object
}

export default AnecdoteList
