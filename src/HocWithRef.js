/**
 * 高阶组件：通过Ref访问组件实例
 * 当高阶组件封装的复用逻辑需要被包装组件的方法或属性的协同支持时，这种用法就有了用武之地
 */
import React, { Component } from 'react'

function withRef (WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.someMethod = this.someMethod.bind(this)
    }

    componentDidMount () {
      this.someMethod()
    }

    someMethod () {
      this.wrappedInstance.someMethodInWrappedComponent();
    }

    render () {
      return <WrappedComponent ref={instance => this.wrappedInstance = instance} {...this.props} />
    }
  }
}

class MyComponent extends Component {
  someMethodInWrappedComponent () {
    console.log('调用方法')
  }
  render () {
    return <div>包装子组件</div>
  }
}

const MyComponentWithRef = withRef(MyComponent)

export default MyComponentWithRef
