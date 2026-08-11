import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventDetails from './pages/EventDetails';
import GroupDetails from './pages/GroupDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventDetails />} />
        <Route path="/groups/:groupId" element={<GroupDetails />} />
      </Routes>
    </Router>
  );
}