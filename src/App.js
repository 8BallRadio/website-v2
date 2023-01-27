import React from 'react';
import { Routes, Route, Link, BrowserRouter, RouterProvider } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './pages/About';
import Archive from './pages/Archive';
import Calendar from './pages/Calendar';
import Events from './pages/Events';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/about" element={<Calendar />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/archive" element={<Archive />} />
                </Routes>
                <Footer />
            </div>
        )
    }
}

export default App;