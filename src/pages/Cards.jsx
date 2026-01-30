import React from 'react';
import { Plus } from 'lucide-react';

const Cards = () => {
    return (
        <div className='bg-[#F8F9FB] min-h-screen pb-24 px-5 pt-16'>
            {/* Header */}
            <div className='flex justify-between items-center mb-8'>
                <h1 className='text-[28px] font-medium text-[#111827] tracking-tight'>Cards</h1>
                <button className='bg-[#111827] text-white px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 shadow-md'>
                    <span>Create card</span>
                    <Plus size={16} strokeWidth={2.5} />
                </button>
            </div>

            {/* The Bank Card */}
            <div
                className='w-full rounded-[24px] relative overflow-hidden shadow-2xl text-white p-6'
                style={{
                    aspectRatio: '1.586',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    background: 'linear-gradient(135deg,#111827,#020617)',
                }}
            >

                {/* Wio Logo Watermark - Centered and Big */}
                <div
                    className='absolute inset-0 flex items-center justify-center pointer-events-none'
                    style={{ opacity: 0.03 }}
                >
                    <svg viewBox="0 0 200 100" style={{ width: '120%', height: '120%' }}>
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="140" fontFamily="sans-serif" fontWeight="bold" fill="white">wio</text>
                    </svg>
                </div>

                {/* Top Content */}
                <div className='relative z-10 flex justify-between items-start'>
                    <div>
                        <div className='text-[10px] font-bold text-gray-300 tracking-wider uppercase mb-1'>RONALD PRITHIV PANDIARAJ</div>
                    </div>

                    <div className='flex flex-col items-end gap-1'>
                        <div className='bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1'>
                            Physical
                            {/* Contactless Signal */}
                        </div>
                        <div className='flex items-center gap-1 mt-1'>
                            <span className='font-bold text-white text-xs'></span>
                            <span className='text-[10px] font-medium text-white'>Pay</span>
                        </div>
                        <div className='text-[10px] font-medium text-white'>Debit</div>
                    </div>
                </div>

                {/* Chip */}
                <div className='relative z-10 mt-6'>
                    <div
                        className='relative overflow-hidden rounded-md border'
                        style={{
                            width: '44px',
                            height: '32px',
                            background: 'linear-gradient(135deg,#FCD34D,#F59E0B)',
                            borderColor: '#FBBF24',
                            opacity: 0.9,
                        }}
                    >
                        <div
                            className='absolute'
                            style={{
                                top: '50%',
                                left: 0,
                                width: '100%',
                                height: '1px',
                                backgroundColor: 'rgba(0,0,0,0.2)',
                                transform: 'translateY(-50%)',
                            }}
                        ></div>
                        <div
                            className='absolute'
                            style={{
                                top: 0,
                                left: '33%',
                                width: '1px',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.2)',
                            }}
                        ></div>
                        <div
                            className='absolute'
                            style={{
                                top: 0,
                                right: '33%',
                                width: '1px',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.2)',
                            }}
                        ></div>
                        <div
                            className='absolute rounded-md'
                            style={{
                                top: '50%',
                                left: '50%',
                                width: '16px',
                                height: '16px',
                                border: '1px solid rgba(0,0,0,0.2)',
                                transform: 'translate(-50%,-50%)',
                            }}
                        ></div>
                    </div>
                </div>

                {/* Wio Logo (Outline) in Middle */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none'>
                    {/* Outline Wio Logo */}
                </div>

                {/* Bottom Content */}
                <div className='absolute bottom-6 left-6 right-6 flex justify-between items-end z-10'>
                    <div className='flex flex-col'>
                        <div className='text-[10px] text-gray-400 font-medium mb-1'>Physical</div>
                        <div className='font-mono text-lg tracking-widest flex gap-3 text-white'>
                            <span className='opacity-60'>••••</span> <span>1354</span>
                        </div>
                    </div>
                    <div className='text-right'>
                        <div className='text-2xl font-bold italic text-white leading-none mb-0.5'>VISA</div>
                        <div className='text-[6px] text-gray-300 uppercase tracking-widest opacity-70'>Platinum Business</div>
                    </div>
                </div>
            </div>

            {/* Card Info */}
            <div className='mt-4 flex items-center gap-2 text-[11px] text-gray-600'>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>This card is using your accounts money</span>
            </div>

            <div className='mt-4 bg-white rounded-2xl p-1 flex items-center'>
                <button className='flex-1 h-10 rounded-2xl bg-[#111827] text-white text-sm font-semibold flex items-center justify-center gap-2'>
                    <span>Debit</span>
                    <span className='text-xs text-gray-300'>฿1.13</span>
                </button>
                <button className='flex-1 h-10 rounded-2xl bg-white text-gray-500 text-sm font-semibold flex items-center justify-center'>
                    Get Business credit card
                </button>
            </div>

            {/* Actions */}
            <div className='mt-4 flex gap-3'>
                <button className='flex-1 h-12 bg-white rounded-2xl border border-[#E5E7EB] text-sm font-semibold text-[#111827] flex items-center justify-center gap-2'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    Details
                </button>
                <button className='flex-1 h-12 bg-white rounded-2xl border border-[#E5E7EB] text-sm font-semibold text-[#111827] flex items-center justify-center gap-2'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10H3M16 2v4M8 2v4M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    </svg>
                    Freeze
                </button>
                <button className='flex-1 h-12 bg-white rounded-2xl border border-[#E5E7EB] text-sm font-semibold text-[#111827]'>
                    More
                </button>
            </div>

            {/* Promotions */}
            <div className='mt-6 bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'>
                <div className='flex gap-3'>
                    <div className='w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <div className='flex-1'>
                        <div className='text-sm font-semibold text-[#111827] mb-1'>Apply for Business credit card</div>
                        <div className='text-xs text-gray-500 font-medium mb-3'>
                            Turn any of your Wio Business cards into a credit card.
                        </div>
                        <button className='px-4 py-2 border border-[#E5E7EB] rounded-xl text-sm font-semibold text-[#111827] bg-white'>
                            Apply now
                        </button>
                    </div>
                </div>
            </div>

            {/* Business Loan */}
            <div className='mt-4 bg-white rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'>
                <div className='flex gap-3'>
                    <div className='w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                            <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                    </div>
                    <div className='flex-1'>
                        <div className='text-sm font-semibold text-[#111827] mb-1'>Business Loan</div>
                        <div className='text-xs text-gray-500 font-medium mb-3'>
                            Get the funding you need to grow your business.
                        </div>
                        <button className='px-4 py-2 border border-[#E5E7EB] rounded-xl text-sm font-semibold text-[#111827] bg-white'>
                            Apply now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cards;
