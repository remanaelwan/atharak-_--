import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Will from './pages/Will';
import Charity from './pages/Charity';
import Memories from './pages/Memories';
import Assistant from './pages/Assistant';
import Profile from './pages/Profile';
import './lib/i18n';
import { useEffect } from 'react';
import { useAuthStore } from './store/authStore';

function AppContent() {
  const location = useLocation();
  const { language } = useAuthStore();

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const isWelcome = location.pathname === '/welcome';

  return (
    <Routes>
      <Route path="/welcome" element={<Welcome />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/will" element={<Will />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
