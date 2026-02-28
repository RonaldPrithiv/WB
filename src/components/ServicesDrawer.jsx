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

const ServicesDrawer = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Bottom Drawer */}
            <div
                className={`fixed left-0 right-0 bottom-0 bg-white z-[60] px-5 pt-8 pb-28 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
            >
                {/* Drawer Handle */}
                <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6 absolute top-3 left-1/2 transform -translate-x-1/2" />

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
        </>
    );
};

export default ServicesDrawer;
