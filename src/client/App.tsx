import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import { IRouter } from '@/router';

const App = ({ routeList }: { routeList: IRouter[] }): JSX.Element => {
    return (
        <Layout>
            <Routes>
                {routeList?.map((item) => {
                    return <Route {...item} key={item.path} />;
                })}
            </Routes>
        </Layout>
    );
};

export default App;
