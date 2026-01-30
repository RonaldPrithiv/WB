import React from 'react';
import { FileText, BarChart2, ScrollText, Wifi } from 'lucide-react';

const ServiceItem = ({ icon: Icon, label, color, bgColor, isDark = false, customContent }) => (
    <div className='flex flex-col items-center gap-3 w-full'>
        <div
            className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-sm transition-transform active:scale-95 ${isDark ? 'shadow-md' : ''}`}
            style={{ backgroundColor: bgColor }}
        >
            {customContent ? customContent : (
                <Icon size={28} color={color} strokeWidth={1.5} />
            )}
        </div>
        <span className='text-[11px] text-center text-gray-600 font-medium leading-tight max-w-[80px]'>
            {label}
            {label === 'uTap' && (
                <span className='block text-[9px] text-gray-500 mt-0.5'>etisalat</span>
            )}
        </span>
    </div>
);

const Services = () => {
    return (
        <div className='bg-[#F8F9FB] min-h-screen pb-24 relative'>
            {/* Cards section at top */}
            <div className='pt-16 px-5'>
                <div className='flex justify-between items-center mb-4'>
                    <h1 className='text-[28px] font-medium text-[#111827] tracking-tight'>Cards</h1>
                    <button className='bg-[#111827] text-white pl-4 pr-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1 shadow-lg'>
                        Create card <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </button>
                </div>

                <div className='w-full bg-[#0F172A] rounded-[24px] relative overflow-hidden shadow-2xl text-white p-6' style={{ aspectRatio: '1.586' }}>
                    <div
                        className='absolute inset-0'
                        style={{ background: 'linear-gradient(135deg,#1e293b,#020617)' }}
                    ></div>

                    {/* Wio watermark */}
                    <div
                        className='absolute inset-0 flex items-center justify-center pointer-events-none'
                        style={{ opacity: 0.03 }}
                    >
                        <svg viewBox="0 0 200 100" style={{ width: '120%', height: '120%' }}>
                            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="140" fontFamily="sans-serif" fontWeight="bold" fill="white">wio</text>
                        </svg>
                    </div>

                    <div className='relative z-10 flex justify-between items-start'>
                        <div>
                            <div className='text-[10px] font-bold text-gray-300 tracking-wider uppercase mb-1'>RONALD PRITHIV PANDIARAJ</div>
                        </div>
                        <div className='flex flex-col items-end gap-1'>
                            <div className='bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1'>
                                Physical
                            </div>
                            <div className='flex items-center gap-1 mt-1'>
                                <span className='font-bold text-white text-xs'></span>
                                <span className='text-[10px] font-medium text-white'>Pay</span>
                            </div>
                            <div className='text-[10px] font-medium text-white'>Debit</div>
                        </div>
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
                            <div className='text-[7px] text-white uppercase tracking-widest opacity-80'>Platinum Business</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom sheet Services modal */}
            <div
                className='absolute left-0 right-0 bottom-0 bg-white px-5 pt-8 pb-28'
                style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
            >
                <h2 className='text-[28px] font-bold text-[#111827] mb-6'>Services</h2>

                <div className='grid grid-cols-4 gap-y-8 gap-x-2 place-items-start'>
                    <ServiceItem
                        icon={FileText}
                        label="Invoices"
                        bgColor="#EDE9FE"
                        color="#7C3AED"
                    />
                    <ServiceItem
                        icon={BarChart2}
                        label="WPS Salary transfers"
                        bgColor="#DBEAFE"
                        color="#2563EB"
                    />
                    <ServiceItem
                        icon={ScrollText}
                        label="Cheques"
                        bgColor="#DCFCE7"
                        color="#16A34A"
                    />

                    <ServiceItem
                        label="uTap"
                        bgColor="#DC2626"
                        isDark
                        customContent={
                            <div className='flex flex-col items-center justify-center w-full h-full'>
                                <div className='flex items-center text-white gap-0.5'>
                                    <Wifi size={10} className="rotate-90" />
                                    <span className='text-lg font-bold italic tracking-tight'>Tap</span>
                                </div>
                                <div className='w-full h-[1px] bg-white opacity-20 my-0.5'></div>
                                <div className='flex gap-0.5'>
                                    <div className='w-2 h-1.5 bg-yellow-400 rounded-sm'></div>
                                    <div className='w-2 h-1.5 bg-blue-500 rounded-sm'></div>
                                </div>
                            </div>
                        }
                    />

                    <ServiceItem
                        label="Magnati ePOS"
                        bgColor="#0F172A"
                        isDark
                        customContent={
                            <div className='relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl'>
                                <div
                                    className='absolute'
                                    style={{
                                        left: '-8px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '9999px',
                                        backgroundColor: '#2563EB',
                                        filter: 'blur(4px)',
                                        opacity: 0.8,
                                    }}
                                ></div>
                                <div className='relative z-10 text-center'>
                                    <span className='text-white font-bold text-[10px] leading-tight block'>magnati</span>
                                    <span className='text-white font-medium text-[8px] opacity-80 block'>ePOS</span>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
