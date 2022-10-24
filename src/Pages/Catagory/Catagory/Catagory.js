import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Catagory = () => {

    const CatagoryNews = useLoaderData();

    return (
        <div>
            <h3>This is Catagory has news: {CatagoryNews.length}</h3>
            {
                CatagoryNews.map(news => <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>)
            }
        </div>
    );
};

export default Catagory;