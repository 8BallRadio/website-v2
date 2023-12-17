import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Archive from '../pages/Archive'
import Schedule from '../pages/Schedule'
import Login from '../pages/auth/Login'
import SetPassword from '../pages/auth/SetPassword'
import Dashboard from '../pages/Dashboard'
import CreateShow from '../pages/CreateShow'
import ProtectedRoute from '../components/ProtectedRoute'
import Shows from '../pages/Shows'
import ShowDetails from '../pages/ShowDetails'
import Homepage from '../pages/Homepage'

// TODO: Implement Events and Calendar pages
// import Calendar from './pages/Calendar';
// import Events from './pages/Events';

const Router = () => {
  return (
    <Routes>
      <Route path="*" element={<Homepage />} />
      <Route path="shows" element={<Shows />} />
      <Route path="shows/:showKey" element={<ShowDetails />} />
      <Route path="archive" element={<Archive />} />
      <Route path="schedule" element={<Schedule />} />
      {/* <Route path="login" element={<Login />} /> */}
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="setpassword"
        element={
          <ProtectedRoute>
            <SetPassword />
          </ProtectedRoute>
        }
      />
      <Route
        path="createshow"
        element={
          <ProtectedRoute>
            <CreateShow />
          </ProtectedRoute>
        }
      />

      {/* <Route path="events" element={<Events />} /> */}
      {/* <Route path="calendar" element={<Calendar />} /> */}
    </Routes>
  )
}

export default Router
