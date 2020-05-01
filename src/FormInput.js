import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    //通过 this . input 获取到 input 元素 的值
    console.log('The title you submitted was ' + this.input.value);
    e.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          title:
          <input type="text" ref="{input => this.input = input}" />
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// LoginForm.defaultValue = {
//   value: 'mobx'
// }

export default LoginForm;
