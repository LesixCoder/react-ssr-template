import Home from '@/pages/Home';
import List from '@/pages/List';

export interface IRouter {
    path: string;
    element: JSX.Element;
}

const router: Array<IRouter> = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/list',
        element: <List />,
    },
];

export default router;
