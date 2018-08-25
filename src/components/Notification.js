import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const message = this.props.notification
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

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

const ConnectedNotification = connect(
  mapStateToProps
)(Notification)

export default ConnectedNotification
