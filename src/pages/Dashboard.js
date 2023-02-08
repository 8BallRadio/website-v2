import React, { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Dashboard = () => {

    // Get current user and signOut function from context
    const { user, signOut } = useAuth()
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [website, setWebsite] = useState(null);
    const [avatar_url, setAvatarURL] = useState(null);

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
            .select(`username, website, avatar_url`)
            .eq('id', user?.id)
            .single();

            if (error && status !== 406) {
                throw Error;
            }

            if (data) {
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarURL(data.avatar_url)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setLoading(false)
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
        <div className='authContainer'>
            <p>Welcome {user?.email}!</p>
            <form onSubmit={updateProfile} className="form-widget">
                <div>
                    <label htmlFor="username">Name</label>
                    <input
                    id="username"
                    type="text"
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="website">Website</label>
                    <input
                    id="website"
                    type="url"
                    value={website || ''}
                    onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div>
                    <button className="button primary block" disabled={loading}>
                    Update profile
                    </button>
                </div>
            </form>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )

}

export default Dashboard;