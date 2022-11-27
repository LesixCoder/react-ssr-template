import React from 'react';
import { getData } from '@/client/api';

//组件
export default class Index extends React.Component {
    constructor(props: any) {
        super(props);
        //得到初始化数据
        this.state = {
            initialData: props.staticContext.initialData || {},
        };
    }

    handlerClick() {
        alert('一起来玩 react ssr 呀。');
    }

    static async getInitialProps() {
        let res = await getData();

        return res;
    }

    render() {
        const { data } = this.state as any;
        return (
            <div>
                {' '}
                {data &&
                    data.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        );
                    })}
                {!data && <div>暂无数据</div>}
            </div>
        );
    }
}
