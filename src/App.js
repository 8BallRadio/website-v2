import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter, RouterProvider, redirect, useNavigate, useLocation } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './pages/About';
import Archive from './pages/Archive';
import Calendar from './pages/Calendar';
import Events from './pages/Events';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

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
            history("/signup", {replace : true});
            setSignuplink("");
        }
    }, [location, user]);

    return (
        <div className="container">
            <Header />
            <div className="contentContainer">
                <Routes>
                    <Route path="/*" element={<About />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/signup" element={
                        <ProtectedRoute>
                            <SignUp />
                        </ProtectedRoute>} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App;


