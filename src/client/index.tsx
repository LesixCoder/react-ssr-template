import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter, matchRoutes } from 'react-router-dom';
import App from './App';
import router from '@/router';
import RootContextProvider from '@/shared/provider';

const Clinet = () => {
    let initialData = JSON.parse((document.getElementById('__InitData__') as any).value);
    //查找路由
    return (
        <BrowserRouter>
            <RootContextProvider initialData={initialData}>
                <App routeList={router} />
            </RootContextProvider>
        </BrowserRouter>
    );
};

// 将事件处理加到ID为root的dom下
hydrateRoot(document.getElementById('root') as Document | Element, <Clinet />);
