import React from 'react'
import PropTypes from 'prop-types'

class Notification extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const message = this.context.store.getState().notification
    let style
    if (message !== '') {
      style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
      }
    }

    return (
      <div style={style}>
        {message}
      </div>
    )
  }
}

Notification.contextTypes = {
  store: PropTypes.object
}

export default Notification
