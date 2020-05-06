/**
 * 高阶组件：操纵 props
 */
import React, { Component } from 'react'

const withPersistentData = key => WrappedComponent => {
  return class extends Component {
    componentWillMount () {
      let data = localStorage.getItem(key)
      this.setState({ data })
    }

    render () {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

class MyComponent extends Component {
  render () {
    return <div>{this.props.data}</div>
  }
}

const MyComponentWithPersistentData = withPersistentData('data')(MyComponent)

export default MyComponentWithPersistentData
