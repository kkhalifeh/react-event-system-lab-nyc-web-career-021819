// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  setFocus = () => {
    console.log('Good!');
  }

  setBlur = () => {
    console.log('Hey! Eyes on me!');

  }

  render() {
    return (
      <button onFocus={this.setFocus} onBlur={this.setBlur}></button>
    )
  }
}
