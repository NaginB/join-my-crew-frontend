import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

interface RoutesInterface {
    element: React.FC,
    path: string,
    private?: boolean,
    footer?: boolean
    header?: boolean
}

const AppRoutes: React.FC = () => {

    const [routes] = useState<RoutesInterface[]>([
        {
            element: Home,
            path: '/',
        },
        {
            element: NotFound,
            path: '*'
        }
    ]);
    return (
        <Router>
            <Routes>
                {
                    routes.map(({ element: Element, path }) => (
                        <Route element={<Element />} path={path} />
                    ))
                }
            </Routes>

        </Router>
    )
}

export default AppRoutes;
