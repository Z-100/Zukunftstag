import React from 'react';
import {TextListElement} from '../models';

export const HomePage = () => {

    const textList: TextListElement[] = [
        {
            id: 0,
            emoji: '📃',
            content: 'Dieser Text befindet sich in einer Liste!',
        },
        {
            id: 0,
            emoji: '📜',
            content: 'Dieser Text auch!!! ',
        },
        {
            id: 0,
            emoji: '❔',
            content: 'Aber wie funktioniert denn das Ganze?',
        },
        {
            id: 0,
            emoji: '📴',
            content: 'Für jedes Element der Liste, wird ein HTML-Element erstellt.',
        },
    ]

    return (
        <div className='flex flex-row align-center justify-center'>
            <div>
                <div className='bg-first max-w-title'>
                    <h1 className='text-white text-right text-6xl'>So programmiert man am</h1>
                    <h1 className='text-white text-left text-9xl'>Zukunftstag</h1>
                </div>

                <div className='mt-12 w-[36rem] text-white text-left text-2xl pl-2'>
                    {textList.map(({id, emoji, content}) => (
                        <p key={id} className='my-4'>• {emoji} {content}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
