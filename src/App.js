import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter, RouterProvider, redirect, useNavigate, useLocation } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './pages/About';
import Archive from './pages/Archive';
import Calendar from './pages/Calendar';
import Events from './pages/Events';
import Login from './pages/auth/Login';
import SetPassword from './pages/auth/SetPassword';
import Dashboard from './pages/Dashboard';
import CreateShow from './pages/CreateShow';
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
            history("/setpassword", {replace : true});
            console.log("test for redirect");
            setSignuplink("");
        }
    }, [location, user]);

    return (
        <>
            <Header />
            <div className="mainContentContainer">
                <div className="contentContainer">
                    <Routes>
                        <Route path="/*" element={<About />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/archive" element={<Archive />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />                            
                            </ProtectedRoute>} />
                        <Route path="/setpassword" element={
                            <ProtectedRoute>
                                <SetPassword />
                            </ProtectedRoute>} />
                        <Route path="/createshow" element={
                            <ProtectedRoute>
                                <CreateShow />
                            </ProtectedRoute>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App;


