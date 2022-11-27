import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

const Layout = (props: PropsWithChildren) => {
    return (
        <div>
            <div>
                <Link to="/">首页</Link>
                <Link to="/list">列表页</Link>
            </div>
            <div>{props.children}</div>
        </div>
    );
};
export default Layout;
