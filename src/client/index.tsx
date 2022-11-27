import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import router from '@/router';

const Clinet = () => {
    return (
        <BrowserRouter>
            <App routeList={router} />
        </BrowserRouter>
    );
};

// 将事件处理加到ID为root的dom下
hydrateRoot(document.getElementById('root') as Document | Element, <Clinet />);
