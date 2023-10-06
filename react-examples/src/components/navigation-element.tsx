import React from 'react';
import {Link} from 'react-router-dom';
import routerData from "../models/router-data";
import {RouterGroup} from "../models";

interface NavigationElementProps {
    type: RouterGroup,
}
export const NavigationElement = ({ type }: NavigationElementProps) => {

    return (
        <nav
            className='h-[15%] w-screen px-16 bg-third flex justify-between items-center'>

            {routerData
                .filter(it => it.group === type)
                .map((it) => (
                    <Link className='text-white text-5xl font-semibold transition-colors duration-300 hover:text-gray-300'
                          to={it.path}>
                        {it.title}
                    </Link>
                ))
            }
        </nav>
    );
}
