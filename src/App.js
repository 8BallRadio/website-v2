import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Router from "./components/Router";

import { useAuth } from './contexts/Auth';

const App = () => {
    const location = useLocation();
    const history = useNavigate();
    const { user } = useAuth();
    const [signuplink, setSignuplink] = useState(location.pathname);

    useEffect(() => {
        // If the intial signup link has the access token and the user is logged in
        // redirect to signup and clear intial signup

        if(signuplink.includes("type=invite") && user){
            history("/setpassword", {replace : true});
            console.log("test for redirect");
            setSignuplink("");
        }
    }, [location, user]);

    return (
        <>
            <Header />
            {/* Main App */}
            <Router />
            <Footer />
        </>
    )
}

export default App;


