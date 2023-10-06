import { JSX } from 'react';
import { RouterGroup } from "./router-group";

export interface RouteType {
    path: string,
    element: JSX.Element,
    title: string,
    group: RouterGroup,
}
