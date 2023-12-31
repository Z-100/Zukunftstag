import React from 'react'
import routerData from '../models/router-data';
import {
    Route,
    Routes,
} from 'react-router-dom';

export const Router = () => {

    const routes = routerData.map(({path, element, title}) => (
        <Route
            key={title}
            path={path}
            element={element}
        />
    ))

    return <Routes>{routes}</Routes>;
}
