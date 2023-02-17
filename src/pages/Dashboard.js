import React, { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';

import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Dashboard = () => {

    // Get current user and signOut function from context
    const { user, signOut } = useAuth()
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [website, setWebsite] = useState(null);
    const [avatar_url, setAvatarURL] = useState(null);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        getProfile();
    }, [user]);

    const getProfile = async () => {
        try {
            setLoading(true);

            if(user==null){
                return;
            }
            let { data, error, status } = await supabase
            .from('profiles')
            .select(`username, website, avatar_url, shows`)
            .eq('id', user?.id)
            .single();

            if (error && status !== 406) {
                throw Error;
            }

            if (data) {
                setUsername(data.username);
                setWebsite(data.website);
                setAvatarURL(data.avatar_url);
                setShows(data.shows);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    const updateProfile = async (e) => {
        e.preventDefault()

        try {
            if(user==null){
                return;
            }
            setLoading(true);

            const updates = {
                id: user?.id,
                username,
                website,
                avatar_url,
                updated_at: new Date(),
            }
        
            let { data, error, status} = await supabase.from('profiles').upsert(updates)
            console.log(data);
            console.log(error);
            if (error) {
                throw error
            }
        } catch (error) {
          alert(error.message)
        } finally {
          setLoading(false)
        }
      }

    const history = useNavigate()

    async function handleSignOut() {
        // Ends user session
        await signOut()

        // Redirects the user to Login page
        history('/login')
    }
    
    // TODO:
    // Set shows, 

    return (
        <div className={`pushFromTop authContainer`}>
            <h2>Welcome {user?.email}!</h2>
            <form onSubmit={updateProfile} className="form-widget" method="post">
                <div>
                    <label htmlFor="username">Name</label>
                    <br/>
                    <input
                    id="username"
                    type="text"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="website">Website</label>
                    <br/>
                    <input
                    id="website"
                    type="url"
                    value={website || ''}
                    onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                { shows?.length == 0
                    ? <div> You're currently have 0 shows </div>
                    : <div> You're currently a part of {shows && shows?.length} shows</div>   }
                <div>
                    <button className="button primary block" disabled={loading}>
                    Update profile
                    </button>
                </div>
            </form>
            <Link to="/createshow">
                <div>
                    <button>Create a show</button>
                </div>
            </Link>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )

}

export default Dashboard;