import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/news-catagories')
        .then(res => res.json())
        .then(data => setCatagories(data))
    }, [])

    return (
        <div>
            <h4>All Catagories: {catagories.length}</h4>
            <div>
                {
                    catagories.map(catagory => <p key={catagory.id}>
                        <Link to={`/catagory/${catagory.id}`}>{catagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;