import React from 'react';

const Card = ({id, name, str, def}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='members' src={`https://robohash.org/${name}`} />
            <div>
                <h2>{name}</h2>
                <p>{str} {def}</p>
            </div>

        </div>
    );
};

export default Card;

