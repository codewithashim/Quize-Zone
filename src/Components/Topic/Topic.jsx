import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topic = () => {
    const quizeTopic = useLoaderData()
    const allTopic = quizeTopic.data;
    console.log(allTopic);
    return (
        <div>
            <h2>Hello Topic</h2>
        </div>
    );
};

export default Topic;