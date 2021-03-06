import React, { Component } from 'react'

class Username extends Component {

state = {
    username: ''
}

onChange = e => {
    this.setState({
        username: e.target.value
    })
};

onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
}

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input
            type="text"
            placeholder="Enter username"
            onChange={this.onChange}
        />
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Username;
