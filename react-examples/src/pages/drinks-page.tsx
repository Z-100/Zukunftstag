import React from 'react';
import {DrinkCard} from '../components';
import {drinks} from '../models';

export const DrinksPage = () => {

    return (
        <>
            <div
                className={"drink-div flex flex-row flex-wrap justify-center overflow-y-auto max-h-screen no-scrollbar"}>
                {drinks.map(drink => (
                    <div key={drink.id}>
                        <DrinkCard
                            title={drink.title}
                            rating={drink.rating}
                            description={drink.description}
                            image={drink.image}
                        />
                    </div>
                ))}
            </div>
            <div style={{height: '20rem'}}/>
        </>
    );
}
