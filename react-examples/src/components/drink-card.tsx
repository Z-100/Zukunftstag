import React from 'react';

interface DrinkProps {
    title: string,
    description: string,
    image: string,
    rating: number,
}
export const DrinkCard = ({ rating, image, title, description }: DrinkProps) => {

    const stars = '⭐'.repeat(rating);

    return (
        <div className="drink shadow-lg text-white bg-gray-800 rounded-lg p-4 w-80 h-96 m-4 hover:shadow-fourth transition-shadow duration-100">

            <div className="flex justify-center w-72 h-52">
                <img alt="" src={image} className="w-full h-36 p-2 rounded-lg object-cover" />
            </div>

            <div className="text-center my-1">
                <p className="text-yellow-400 text-lg">{stars}</p>
            </div>

            <div className="my-1 text-left">
                <p className="font-semibold text-md break-words text-blue-300">{title}</p>
            </div>

            <div className="my-1 text-left">
                <p className="font-normal text-sm break-words text-green-300">{description}</p>
            </div>

        </div>
    );
}
