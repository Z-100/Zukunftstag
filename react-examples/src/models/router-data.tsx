import React from 'react';
import {RouterGroup, RouteType} from './';
import {DrinksPage, ErrorPage, HelpPage, HomePage, RandomPage} from '../pages';

const routerData: RouteType[] = [
    {
        path: '/',
        element: <HomePage/>,
        title: 'Startseite',
        group: RouterGroup.NAVBAR,
    },
    {
        path: '/drinks',
        element: <DrinksPage/>,
        title: 'Getränke',
        group: RouterGroup.NAVBAR,
    },
    {
        path: '/random',
        element: <RandomPage/>,
        title: 'Random Seite',
        group: RouterGroup.FOOTER,
    },
    {
        path: '/help',
        element: <HelpPage/>,
        title: 'Hilfe',
        group: RouterGroup.FOOTER,

    },
    {
        path: '*',
        element: <ErrorPage/>,
        title: 'Error!',
        group: RouterGroup.OTHER,
    },
]

export default routerData;
