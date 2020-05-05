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
