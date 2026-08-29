import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WelcomePage from './pages/welcomePage';
import ThankYouPage from './pages/thankyouPage';
import VotingPage from './pages/VotingPage';
import EventDetails from './pages/EventDetails';
import GroupDetails from './pages/GroupDetails';
import HistoryPage from "./pages/HistoryPage";
import HistoryResultsPage from "./pages/HistoryResultsPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <main className="page-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/vote" element={<VotingPage />} />
            <Route path="/event" element={<EventDetails />} />
            <Route path="/groups/:groupId" element={<GroupDetails />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="/results/:showId" element={<HistoryResultsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
