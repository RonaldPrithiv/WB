import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ArrowRightLeft, CreditCard, Sparkles } from 'lucide-react';

const BottomNav = () => {
    const navItems = [
        { name: 'Home', path: '/home', icon: Home },
        { name: 'Payments', path: '/payments', icon: ArrowRightLeft },
        { name: 'Cards', path: '/cards', icon: CreditCard },
        { name: 'Services', path: '/services', icon: Sparkles },
    ];

    return (
        <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#111827] text-white rounded-full px-8 py-4 flex justify-between items-center gap-4 w-[calc(100%-40px)] max-w-[360px] shadow-2xl z-50">
            {navItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}
                >
                    {({ isActive }) => (
                        <>
                            <item.icon size={24} strokeWidth={2} color={isActive ? '#FFFFFF' : '#6B7280'} />
                            <span className={`text-[8px] font-medium ${isActive ? 'text-white' : 'text-gray-500'}`}>{item.name}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
