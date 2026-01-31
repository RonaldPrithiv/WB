import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Passcode = () => {
    const [code, setCode] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (code.length === 4) {
            setTimeout(() => {
                navigate('/home');
            }, 300);
        }
    }, [code, navigate]);

    const handleNumClick = (num) => {
        if (code.length < 4) {
            setCode([...code, num]);
        }
    };

    const handleDelete = () => {
        if (code.length > 0) {
            setCode(code.slice(0, -1));
        }
    };

    return (
        <div className='flex flex-col h-screen bg-white px-6 py-6 relative overflow-hidden'>
            {/* Top Bar */}
            <div className='flex justify-start pt-4 pb-4'>
                <button className='p-2 -ml-2'>
                    <ChevronLeft size={28} color='#1F2937' strokeWidth={1.5} />
                </button>
            </div>

            {/* Content */}
            <div className='flex-1 flex flex-col items-center justify-center min-h-0'>
                {/* Logo - Custom SVG for the Flower/Sun shape */}
                <div className='mb-8 text-[#7C3AED]'>
                    <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 5V3" />
                        <path d="M12 21v-2" />
                        <path d="M5 12H3" />
                        <path d="M21 12h-2" />
                        <path d="M17 7l1.5-1.5" />
                        <path d="M17 17l1.5 1.5" />
                        <path d="M7 17l-1.5 1.5" />
                        <path d="M7 7L5.5 5.5" />
                    </svg>
                </div>

                <h2 className='text-2xl font-semibold mb-10 text-center text-[#111827] leading-tight'>
                    Enter your passcode<br />to continue
                </h2>

                {/* Dots - Visible with brand purple */}
                <div className='flex gap-6 mb-12'>
                    {[0, 1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className={`w-5 h-5 rounded-full transition-all duration-200 ${
                                i < code.length
                                    ? 'bg-[#7C3AED]'
                                    : 'bg-transparent border-2 border-[#7C3AED]'
                            }`}
                        />
                    ))}
                </div>

                {/* Keypad */}
                <div className='w-full max-w-[320px] grid grid-cols-3 gap-y-6 gap-x-12 place-items-center mb-6'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <button
                            key={num}
                            onClick={() => handleNumClick(num)}
                            className='text-3xl font-normal text-[#1F2937] focus:bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center transition-colors active:bg-gray-100'
                        >
                            {num}
                        </button>
                    ))}
                    {/* Empty slot */}
                    <div></div>
                    {/* Zero */}
                    <button
                        onClick={() => handleNumClick(0)}
                        className='text-3xl font-normal text-[#1F2937] focus:bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center transition-colors active:bg-gray-100'
                    >
                        0
                    </button>
                    {/* Delete */}
                    <button
                        onClick={handleDelete}
                        className='text-[#1F2937] focus:bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center transition-colors active:bg-gray-100'
                    >
                        <ChevronLeft size={28} />
                    </button>
                </div>

                {/* Forgot Link */}
                <div className='mt-4 text-center'>
                    <button className='text-sm text-[#6B7280] font-medium hover:text-[#7C3AED] transition-colors'>
                        Forgot your passcode?
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Passcode;
