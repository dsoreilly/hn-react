/** @format */

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorView from '../views/Error';
import ItemView from '../views/Item';
import ItemsView from '../views/Items';
import RootView from '../views/Root';
import UserView from '../views/User';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootView />,
            errorElement: <ErrorView />,
            children: [
                {
                    errorElement: <ErrorView />,
                    children: [
                        {
                            index: true,
                            element: <ItemsView />,
                        },
                        {
                            path: 'item/:id',
                            element: <ItemView />,
                        },
                        {
                            path: '/ask',
                            element: <ItemsView type="ask" />,
                        },
                        {
                            path: '/jobs',
                            element: <ItemsView type="job" />,
                        },
                        {
                            path: '/newest',
                            element: <ItemsView type="new" />,
                        },
                        {
                            path: '/show',
                            element: <ItemsView type="show" />,
                        },
                        {
                            path: 'user/:id',
                            element: <UserView />,
                        },
                    ],
                },
            ],
        },
    ],
    { basename: '/hn-react' }
);
