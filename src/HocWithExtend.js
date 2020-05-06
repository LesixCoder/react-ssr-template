/**
 * 高阶组件：继承方式实现
 * 通过继承被包装组件实现逻辑的复用，继承方式实现的高阶组件常用于渲染劫持。例如，于登录状态时，允许组件渲染，否则渲染一个空组件。
 */
import React, { Component } from 'react'

function withAuth (WrappedComponent) {
  return class extends WrappedComponent {
    render () {
      if (this.props.loggedIn) {
        return super.render();
      } else {
        return null;
      }
    }
  }
}

class SimpleComponent extends Component {
  render () {
    return <div>登录成功</div>
  }
}

const ComponentWithExtend = withAuth(SimpleComponent)

export default ComponentWithExtend
