import React from 'react';
import {
    BrowserRouter
} from 'react-router-dom';
import {
    NavigationElement,
    Router,
} from './components';
import {
    RouterGroup
} from "./models";

function App() {
    return (
        <div className="h-screen bg-primary flex flex-col items-center">
            <BrowserRouter>

                <NavigationElement type={RouterGroup.NAVBAR}/>

                <div className="w-[80%] flex-grow overflow-y-auto">
                    <Router/>
                </div>

                <NavigationElement type={RouterGroup.FOOTER}/>
            </BrowserRouter>

        </div>
    );
}

export default App;
