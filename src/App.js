import React from 'react'
import ConnectedNotification from './components/Notification'
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import ConnectedFilter from './components/Filter'
import { connect } from 'react-redux'
import { anecdoteInit } from './reducers/anecdoteReducer'
import anecdoteService from './services/anecdotes'

class App extends React.Component {
  componentDidMount = async () => {
    const anecdotes = await anecdoteService.getAll()
    this.props.anecdoteInit(anecdotes)
  }

  render() {
    return (
      <div>
        <h1>Programming anecdotes</h1>
        <ConnectedNotification />
        <ConnectedFilter />
        <ConnectedAnecdoteList />
        <ConnectedAnecdoteForm />
      </div>
    )
  }
}

export default connect(
  null,
  { anecdoteInit }
)(App)