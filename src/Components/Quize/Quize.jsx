import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quize = () => {
    const quize = useLoaderData();
    console.log(quize);
    return (
        <div>
            
        </div>
    );
};

export default Quize;