import React from 'react';
import { hydrateRoot } from 'react-dom/client';

//组件
export default class Index extends React.Component {
    constructor(props: any) {
        super(props);
    }

    handlerClick() {
        alert('一起来玩 react ssr 呀。');
    }

    render() {
        return <h1 onClick={this.handlerClick}>首页</h1>;
    }
}
