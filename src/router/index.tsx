import { useRoutes, Navigate } from 'react-router-dom'

import Home from '../views/home'
import Layout from '../layouts'
import NotFound from '../views/notFound'
interface Route {
    path: string;
    element: React.ReactNode;
    children?: Route[]
}

//路由匹配规则 精准匹配 
function Router() {
    // console.log('路由地址变化', props);

    let Routes: Route[] = [
        {
            path: '/app',
            element: <Layout />,
            children: [
                {
                    path: 'home',
                    element: <Home />,
                },
            ]
        },
        {
            path: '/',
            element: (<Navigate to='/app'></Navigate>),
        },
        {
            path: '*',
            element: (<NotFound></NotFound>),
        }
    ]

    return useRoutes(Routes)
}

export default Router