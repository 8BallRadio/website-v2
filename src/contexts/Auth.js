import React, { useContext, useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);
  
    useEffect(() => {
        // Check active sessions and sets the user
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
        })

        setLoading(false)
    
        // Listen for changes on auth state (logged in, signed out, etc.)
        const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
            setUser(session?.user ?? null);
            setSession(session);
            setLoading(false);
        })

        return () => {
            listener?.unsubscribe;
        };

    }, [])

    // Will be passed down to Signup, Login and Dashboard components
    const value = {
        signUp: (data) => supabase.auth.updateUser(data),
        signInWithOtp: (data) => supabase.auth.signInWithOtp({email : data.otpEmail}),
        signIn: (data) => supabase.auth.signInWithPassword(data),
        signOut: () => supabase.auth.signOut(),
        user,
        session,
    }

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
    
}

export function useAuth() {
    return useContext(AuthContext)
}