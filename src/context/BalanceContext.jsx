import React, { createContext, useContext, useState, useEffect } from 'react';

const BalanceContext = createContext();

export const useBalance = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error('useBalance must be used within a BalanceProvider');
  }
  return context;
};

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    // Initialize from localStorage if available
    const savedBalance = localStorage.getItem('accountBalance');
    return savedBalance ? parseFloat(savedBalance) : 1.13;
  });

  // Save to localStorage whenever balance changes
  useEffect(() => {
    localStorage.setItem('accountBalance', balance.toString());
  }, [balance]);

  const updateBalance = (newBalance) => {
    setBalance(newBalance);
  };

  const addToBalance = (amount) => {
    setBalance(amount);
  };

  const subtractFromBalance = (amount) => {
    setBalance(prev => Math.max(0, prev - amount));
  };

  const value = {
    balance,
    updateBalance,
    addToBalance,
    subtractFromBalance,
  };

  return (
    <BalanceContext.Provider value={value}>
      {children}
    </BalanceContext.Provider>
  );
};

