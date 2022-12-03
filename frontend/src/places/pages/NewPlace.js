import React from 'react';
import { Helmet } from 'react-helmet-async';

const NewPlace = props => {
    const title = 'Elysium | Add a new place';
    const description = 'Add your favorite place to your places.';

    return (
        <div className='Container'>
            <Helmet>
                <title>{title}</title>
                <meta property='og:title' content={title} />
                <meta property='og:description' content={description} />
            </Helmet>
            <h1>NewPlace page</h1>
        </div>
    );
};

export default NewPlace;
