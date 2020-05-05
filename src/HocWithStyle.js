/**
 * 高阶组件：用其他元素包装组件
 * 在高阶组件渲染 时添加额外的元素，这种情况通常用于为组件增加布局或修改样式。
 */
import React, { Component } from 'react'

function withRedBackground (WrappedComponent) {
  return class extends Component {
    render () {
      return (
        <div style={{ backgroundColor: 'red' }}>
          <WrappedComponent {...this.props} />
        </div>
      )

    }
  }
}

class SimpleComponent extends Component {
  render () {
    return <div>liusixin</div>
  }
}

const ComponentWithStyle = withRedBackground(SimpleComponent)

export default ComponentWithStyle
