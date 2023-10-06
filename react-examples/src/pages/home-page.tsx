import React from 'react';

export const HomePage = () => {

    const texts = [
        {value: "🐱🐱🐱"},
        {value: "So kuhl"},
        {value: "🐱🐱🐱"},
        {value: "So kuhl"}
    ];

    return (
        <div className="flex flex-row align-center justify-center">
            <div>
                <div className="bg-first max-w-title">
                    <h1 className="text-white text-right text-6xl">So programmiert man am</h1>
                    <h1 className="text-white text-left text-9xl">Zukunftstag</h1>
                </div>

                <div className="mt-12 text-white text-left text-xl pl-2">
                    {texts.map(({value}) => (
                        <p className={"impress-text"}>{value}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
