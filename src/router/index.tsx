import Home from '@/pages/Home';
import List from '@/pages/List';

export interface IRouter {
    path: string;
    element: JSX.Element;
    loadData?: (data?: any) => any;
}

const router: Array<IRouter> = [
    {
        path: '/',
        element: <Home />,
        loadData: Home.getInitialProps,
    },
    {
        path: '/list',
        element: <List />,
    },
];

export default router;
