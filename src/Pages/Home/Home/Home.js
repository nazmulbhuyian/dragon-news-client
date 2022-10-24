import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const AllNews = useLoaderData();
    return (
        <div>
            <h1>Dragon News: {AllNews.length}</h1>
            {
                AllNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;