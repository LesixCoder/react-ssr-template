/**
 * 高阶组件：组件状态提升
 * 一个典型的场景是，利用高阶组件将原本受控组件需要自己维护的状态统一提升到高阶组件中。
 */
import React, { Component } from 'react'

function withControlledState (WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
      this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange (e) {
      this.setState({
        value: e.target.value
      })
    }

    render () {
      const newProps = {
        controlledProps: {
          value: this.state.value,
          onChange: this.handleValueChange
        }
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

class SimpleControlledComponent extends Component {
  render () {
    //此时的 SimpleControlledComponent 为无状态组件 ，状态由高阶组件维护
    return <input name="simple" {...this.props.controlledProps} />
  }
}

const ComponentWithControlledState = withControlledState(SimpleControlledComponent)

export default ComponentWithControlledState
