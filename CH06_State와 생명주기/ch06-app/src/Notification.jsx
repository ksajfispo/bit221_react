import React, { Component } from 'react'

export default class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.id, 'componentDidMount() called.');
  }

  componentDidUpdate() {
    console.log(this.props.id, 'component() called.');
  }

  componentWillUnmount() {
    console.log(this.props.id, 'componentDidMount() called.');
  }

  render() {
    return (
      <div>
        <div className="alert alert-info" role="alert">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <h4 className="alert-heading">{this.props.header}</h4>
          <span> 
            {this.props.message}
          </span>

          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </div>
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Well done!</h4>
          <span>
            {
              new Date().toLocaleDateString() + "" +new Date().toLocaleTimeString()
            }
          </span>

          <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>

        </div>

      </div>

    )
  }
}
