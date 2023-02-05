import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Dashboard = () => {
    // Get current user and signOut function from context
    const { user, signOut } = useAuth()

    const history = useNavigate()

    async function handleSignOut() {
        // Ends user session
        await signOut()

        // Redirects the user to Login page
        history('/login')
    }
    
    return (
        <div className='authContainer'>
            <p>Welcome {user?.email}!</p>
            <button onClick={handleSignOut}>Sign out</button>
        </div>
    )

}

export default Dashboard;