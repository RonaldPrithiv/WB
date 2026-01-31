import React from 'react';
import { Bell, Plus, RefreshCw, ArrowRightLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBalance } from '../context/BalanceContext';
import { getRecentTransactions } from '../utils/parseTransactions';

const AccountCard = ({ country, name, currency, balance, flag, isSelected }) => (
    <div className={`p-4 rounded-2xl bg-white border border-transparent shadow-sm flex flex-col justify-between h-[120px]`}>
        <div className='flex justify-between items-start'>
            <div className='rounded-full overflow-hidden w-8 h-8 flex items-center justify-center bg-gray-100 border border-gray-200'>
                {flag && (
                    <img
                        src={flag}
                        alt={name}
                        style={{ width: '75%', height: '75%', objectFit: 'contain' }}
                    />
                )}
            </div>
        </div>
        <div>
            <div className='text-[11px] text-gray-400 font-semibold mb-1 uppercase tracking-wider truncate'>{name}</div>
            <div className='text-base font-bold text-gray-900 flex items-baseline gap-0.5'>
                {currency === 'D' ? (
                    <img
                        src="/dirham.png"
                        alt="AED"
                        style={{ width: 14, height: 14, verticalAlign: 'baseline', display: 'inline-block', marginRight: '2px', alignSelf: 'baseline' }}
                    />
                ) : (
                    <span className='text-xs text-gray-500 font-medium inline-block' style={{ verticalAlign: 'baseline', alignSelf: 'baseline' }}>{currency}</span>
                )}
                <span className='inline-block' style={{ verticalAlign: 'baseline', alignSelf: 'baseline' }}>{balance}</span>
            </div>
        </div>
    </div>
);

const Home = () => {
    const [activeTab, setActiveTab] = React.useState('Accounts');
    const navigate = useNavigate();
    const { balance, addToBalance } = useBalance();
    const recentTransactions = React.useMemo(() => getRecentTransactions(3), []);
    
    // Format balance: split into whole and decimal parts
    const balanceStr = balance.toFixed(2);
    const [wholePart, decimalPart] = balanceStr.split('.');

    const handleAddMoneyClick = () => {
        navigate('/add-money');
    };

    return (
        <div className='bg-[#F8F9FB] min-h-screen pb-32 w-full'>
            {/* Header */}
            <div className='bg-white px-6 pt-14 pb-4'>
                <div className='flex justify-between items-start mb-4'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center gap-2'>
                            <div className='w-8 h-8 rounded-full bg-[#111827] text-white flex items-center justify-center text-xs font-bold'>HL</div>
                            <span className='text-[10px] font-semibold text-gray-400 tracking-wide uppercase'>H3X.WORLD L.L.C-FZ</span>
                        </div>

                        <h1 className='text-[28px] font-medium text-[#111827] leading-[1.2] mt-2'>
                            Good evening,<br />
                            Ronald Prithiv <span className='text-[#8B5CF6] align-top text-xl'>✦</span>
                        </h1>
                    </div>
                    <div className='flex items-center gap-3 mt-1'>
                        <button className='px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-full text-[11px] font-semibold text-gray-500 shadow-sm'>
                            Requests 0
                        </button>
                        <button className='relative p-1'>
                            <Bell size={24} color="#374151" strokeWidth={1.5} />
                            <span className='absolute top-1 right-1.5 w-2 h-2 bg-[#EF4444] rounded-full border border-white'></span>
                        </button>
                    </div>
                </div>

                {/* Account Type Tabs */}
                <div className='flex gap-2'>
                    <button
                        onClick={() => setActiveTab('Accounts')}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[#F3F4F6] text-[#111827]"
                        style={
                            activeTab === 'Accounts'
                                ? {
                                      backgroundColor: 'rgba(192, 132, 252, 0.3)',
                                      color: '#111827',
                                  }
                                : undefined
                        }
                    >
                        Accounts
                    </button>
                    <button
                        onClick={() => setActiveTab('Savings')}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[#F3F4F6] text-[#111827]"
                        style={
                            activeTab === 'Savings'
                                ? {
                                      backgroundColor: 'rgba(192, 132, 252, 0.3)',
                                      color: '#111827',
                                  }
                                : undefined
                        }
                    >
                        Savings
                    </button>
                    <button
                        onClick={() => setActiveTab('Credit')}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-[#F3F4F6] text-[#111827]"
                        style={
                            activeTab === 'Credit'
                                ? {
                                      backgroundColor: 'rgba(192, 132, 252, 0.3)',
                                      color: '#111827',
                                  }
                                : undefined
                        }
                    >
                        Credit
                    </button>
                </div>
            </div>

            {/* Main Balance Card */}
            <div className='px-4 mt-4'>
                <div className='bg-white rounded-[24px] p-6 box-border' style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
                    <div className='flex justify-between items-center mb-2'>
                        <span className='text-gray-400 text-sm font-medium'>All accounts balance</span>
                        <button className='bg-white p-1.5 rounded-full hover:bg-gray-100 transition-colors'>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                        </button>
                    </div>
                    <div className='text-[42px] font-bold text-[#111827] mb-6 flex items-baseline tracking-tight'>
                        <img
                            src="/dirham.png"
                            alt="AED"
                            className="mr-2 mt-1"
                            style={{ width: 36, height: 36, verticalAlign: 'baseline', display: 'inline-block', alignSelf: 'baseline' }}
                        />
                        <span className='leading-none inline-block' style={{ lineHeight: '1', verticalAlign: 'baseline' }}>{wholePart}.</span>
                        <span className='text-[28px] font-light leading-none inline-block' style={{ lineHeight: '1.8', verticalAlign: 'baseline' }}>{decimalPart}</span>
                    </div>

                    <div className='flex gap-3 overflow-x-auto no-scrollbar' style={{ width: '100%', maxWidth: '100%' }}>
                        <button
                            className='min-w-[100px] flex-1 flex items-center justify-center gap-2 border border-[#374151] rounded-2xl text-sm font-semibold text-[#374151] bg-white py-4 px-3 shrink-0 whitespace-nowrap'
                            onClick={handleAddMoneyClick}
                        >
                            Add money <Plus size={18} strokeWidth={2.5} className="text-[#374151]" />
                        </button>
                        <button className='min-w-[100px] flex-1 flex items-center justify-center gap-2 border border-[#374151] rounded-2xl text-sm font-semibold text-[#374151] bg-white py-4 px-3 shrink-0 whitespace-nowrap'>
                            Exchange <RefreshCw size={16} strokeWidth={2.5} className="text-[#374151]" />
                        </button>
                        <button className='min-w-[100px] flex-1 flex items-center justify-center gap-2 border border-[#374151] rounded-2xl text-sm font-semibold text-[#374151] bg-white py-4 px-3 shrink-0 whitespace-nowrap'>
                            Transfer <ArrowRightLeft size={18} strokeWidth={2.5} className="text-[#374151]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Individual Account Cards - Side by Side (UAE & USA on same row) */}
            <div className='px-4 mt-4'>
                <div className='flex gap-3'>
                    <div className='flex-1 min-w-0'>
                        <AccountCard
                            flag="/uae.png"
                            name="H3X.WORLD L.L.C-FZ"
                            currency="D"
                            balance={balanceStr}
                            isSelected={true}
                        />
                    </div>
                    <div className='flex-1 min-w-0'>
                        <AccountCard
                            flag="/usa.png"
                            name="h3xworld USD"
                            currency="$"
                            balance="0.00"
                        />
                    </div>
                </div>
            </div>

            {/* Request Status Section */}
            <div className='mt-6 px-4'>
                <div className='flex justify-between items-end mb-4'>
                    <h3 className='text-[19px] font-semibold text-[#111827]'>Request status</h3>
                    <button className='text-sm text-[#7C3AED] font-semibold'>See all</button>
                </div>

                <div className='bg-white p-5 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex gap-4 border border-[#F3F4F6]'>
                    <div className='w-[50px] h-[50px] rounded-xl bg-[#FDF2F8] flex items-center justify-center text-[#DB2777] shrink-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="16" x="5" y="4" rx="2" /><path d="M9 9h6" /><path d="M9 13h6" /><path d="M9 17h4" /></svg>
                    </div>
                    <div className='flex-1 min-w-0'>
                        <div className='text-[11px] text-gray-400 font-medium mb-1'>Ref. No. 871045717939277</div>
                        <div className='text-[#10B981] font-bold text-sm mb-1'>Delivered</div>
                        <div className='text-[10px] text-gray-300 font-medium uppercase'>REQUESTED: JUL 10, 2025</div>
                    </div>
                </div>
            </div>

            {/* Transactions */}
            <div className='mt-8 px-4'>
                <div className='flex justify-between items-end mb-4'>
                    <h3 className='text-[19px] font-semibold text-[#111827]'>Transactions</h3>
                    <button 
                        onClick={() => navigate('/transactions')}
                        className='text-sm text-[#7C3AED] font-semibold'
                    >
                        See all
                    </button>
                </div>
                {/* Transaction Items */}
                <div className='bg-white rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-2 border border-[#F3F4F6]'>
                    {recentTransactions.map((transaction, index) => {
                        const Icon = transaction.icon;
                        const isIncoming = transaction.isIncoming;
                        const amountColor = isIncoming ? 'text-[#10B981]' : 'text-[#111827]';
                        const iconBg = isIncoming ? 'bg-[#ECFDF5]' : 'bg-[#F3F4F6]';
                        const iconColor = isIncoming ? '#10B981' : '#6B7280';
                        
                        return (
                            <div key={index} className='flex gap-4 items-center p-3 border-b border-gray-50 last:border-0'>
                                <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
                                    <Icon size={20} color={iconColor} strokeWidth={1.5} />
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <div className='text-[13px] font-semibold text-[#111827] truncate'>{transaction.name}</div>
                                    <div className='text-[11px] text-gray-500 font-medium'>{transaction.category}</div>
                                </div>
                                <div className={`text-sm font-bold ${amountColor}`}>
                                    {isIncoming ? '+' : '-'}{transaction.amount} AED
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Home;
