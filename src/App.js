import React from 'react';
import { Routes, Route, Link, BrowserRouter, RouterProvider } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './pages/About';
import Archive from './pages/Archive';
import Calendar from './pages/Calendar';
import Events from './pages/Events';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="contentContainer">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/about" element={<Calendar />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/archive" element={<Archive />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App;