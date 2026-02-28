import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ArrowRightLeft, CreditCard, Sparkles } from 'lucide-react';
import ServicesDrawer from './ServicesDrawer';

const BottomNav = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/home', icon: Home },
        { name: 'Payments', path: '/payments', icon: ArrowRightLeft },
        { name: 'Cards', path: '/cards', icon: CreditCard },
        { name: 'Services', isButton: true, icon: Sparkles },
    ];

    return (
        <>
            <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#111827] text-white rounded-[24px] px-8 py-3 flex justify-between items-center gap-4 w-[calc(100%-40px)] max-w-[360px] shadow-2xl z-50">
                {navItems.map((item) => (
                    item.isButton ? (
                        <button
                            key={item.name}
                            onClick={() => setIsServicesOpen(true)}
                            className={`flex flex-col items-center gap-1 transition-colors ${isServicesOpen ? 'text-white' : 'text-gray-500'}`}
                        >
                            <item.icon size={22} strokeWidth={2} color={isServicesOpen ? '#FFFFFF' : '#6B7280'} />
                            <span className={`text-[8px] font-medium ${isServicesOpen ? 'text-white' : 'text-gray-500'}`}>{item.name}</span>
                        </button>
                    ) : (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}
                        >
                            {({ isActive }) => (
                                <>
                                    <item.icon size={22} strokeWidth={2} color={isActive ? '#FFFFFF' : '#6B7280'} />
                                    <span className={`text-[8px] font-medium ${isActive ? 'text-white' : 'text-gray-500'}`}>{item.name}</span>
                                </>
                            )}
                        </NavLink>
                    )
                ))}
            </nav>
            <ServicesDrawer isOpen={isServicesOpen} onClose={() => setIsServicesOpen(false)} />
        </>
    );
};

export default BottomNav;
