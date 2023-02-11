import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import supabase from '../config/supabaseClient';

import "../styles.css";

const ShowDetails = () => {
    const [show, setShow] = useState(null);
    const { showKey } = useParams();

    const [showname, setShowname] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {

        const fetchShowDetails = async () => {
            const { data, error } = await supabase
                .from('shows')
                .select()
                .eq('key', showKey)
                .single();

            if(error){
                // Redirect if show does not exist
            } else {
                console.log(data);
                setShowname(data.showname);
                setDescription(data.description);
            }
        }

        fetchShowDetails();
    }, [])

    return (
        <div className="contentContainer">
            <h2>{showname}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ShowDetails;
