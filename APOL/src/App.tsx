import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Guidelines from './pages/Guidelines';
import ApplicationForm from './pages/ApplicationForm';
import Confirmation from './pages/Confirmation';
import Waitlist from './pages/Waitlist';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </Layout>
  );
}

export default App;