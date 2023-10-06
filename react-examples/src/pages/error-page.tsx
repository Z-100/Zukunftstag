import React from 'react';
import { Link } from "react-router-dom";

export const ErrorPage = () => {
    return(
        <div className={"flex flex-row align-center justify-center"}>
            <div>
                <div className={""}>
                    <h1 className={"text-white text-left text-8xl"}>Error 404</h1>
                    <h1 className={"text-white text-right text-5xl"}>Diese Seite gibt es nicht</h1>
                </div>
                <div className={"mt-12"}>
                    <Link className={"text-white text-xl hover:text-color-first"} to="/"> Zurück zur Startseite</Link>
                </div>
            </div>
        </div>
    );
}
