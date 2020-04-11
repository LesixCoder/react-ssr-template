import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      value: 'redux',
      checkbox: {
        react: false,
        redux: false,
        mobx: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 监听用户名和密码两个 input 值的变化
  handleChange (e) {
    let that = this
    const target = e.target
    if (['react', 'redux', 'mobx'].includes(target.name)) {
      this.setState({
        checkbox: {
          ...that.checkbox,
          [target.name]: target.checked
        }
        // [this.checkbox[target.name]]: target.checked
      })
      return
    }
    this.setState({
      [target.name]: target.value
    })
  }
  handleSubmit (e) {
    console.log('login success！')
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          用户名:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>

        <label>
          密码:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="true" />
        </label>

        <label>
          Pick one library:
          <select name="value" value={this.state.value} onChange={this.handleChange}>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="mobx">Mobx</option>
          </select>
        </label>

        <label>
          React
          <input type="checkbox" name="react" value="react" checked={this.state.checkbox.react} onChange={this.handleChange} />
        </label>
        <label>
          Redux
          <input type="checkbox" name="redux" value="redux" checked={this.state.checkbox.redux} onChange={this.handleChange} />
        </label>
        <label>
          Mobx
          <input type="checkbox" name="mobx" value="mobx" checked={this.state.checkbox.mobx} onChange={this.handleChange} />
        </label>
        <input type="submit" value="登录" />
      </form>
    )
  }
}

// LoginForm.defaultValue = {
//   value: 'mobx'
// }

export default LoginForm;
