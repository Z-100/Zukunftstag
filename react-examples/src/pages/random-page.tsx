import React from 'react';

export const RandomPage = () => {

    // https://opensource.com/sites/default/files/uploads/linux-toy-nyancat.png
    const imageUrl = '';

    return(
        <div className="flex h-[80%] justify-center items-center">
            <img alt="" src={imageUrl} className="h-[75%] w-[75%]"/>
        </div>
    );
}
