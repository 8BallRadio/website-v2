import React, { useState, useEffect } from 'react';

import supabase from '../config/supabaseClient';

import ShowCard from '../components/ShowCard';

import "../styles.css";

const Shows = () => {
    const [fetchError, setFetchError] = useState(null);
    const [shows, setShows] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const {data, error} = await supabase
                .from("shows")
                .select();

            if (error) {
                setFetchError('Could not fetch shows');
                setShows(null);
                console.log(error);
            } else {
                setShows(data);
                setFetchError(null);
            }
        }

        fetchData();

    }, []);

    return (
        <div className="contentContainer">
            <h2>Shows </h2>
            {fetchError && (<p>{fetchError}</p>)}
            {shows && (
                <div className="showsContainer">
                    <div className="showsGrid">
                        {shows.map(show => (
                            <ShowCard key={show.id} show={show} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// TODO: Import shows and dynamically create divs, Links, and photos
// 

export default Shows;