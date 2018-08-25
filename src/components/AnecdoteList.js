import React from 'react'
import { connect } from 'react-redux'
import { voteOnAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  vote = (anecdote) => () => {
    this.props.voteOnAnecdote(anecdote.id)
    this.props.setMessage(`you voted '${anecdote.content}'`)
    setTimeout(() => {
      this.props.removeMessage()
    }, 5000)
  }

  render() {
    return (
      <div>
        <h2>Anecdotes</h2>
        {this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const anecdotesToShow = (anecdotes, filter) => {
  if (filter === '') {
    return anecdotes
  }
  return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
    visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const ConnectedAnecdoteList = connect(
  mapStateToProps,
  { voteOnAnecdote, setMessage, removeMessage }
)(AnecdoteList)

export default ConnectedAnecdoteList
