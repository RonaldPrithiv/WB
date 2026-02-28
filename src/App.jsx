import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { BalanceProvider } from './context/BalanceContext';
import Passcode from './pages/Passcode';
import Home from './pages/Home';
import Payments from './pages/Payments';
import Cards from './pages/Cards';
import Transactions from './pages/Transactions';
import AddMoney from './pages/AddMoney';
import BottomNav from './components/BottomNav';

const AppContent = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  return (
    <div className="app-container" style={{ paddingBottom: showNav ? '80px' : '0', minHeight: '100vh', position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Passcode />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-money" element={<AddMoney />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
      {showNav && <BottomNav />}
    </div>
  );
};

function App() {
  return (
    <BalanceProvider>
      <Router>
        <AppContent />
      </Router>
    </BalanceProvider>
  );
}

export default App;
