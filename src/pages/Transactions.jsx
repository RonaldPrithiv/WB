import React from 'react';
import { ChevronLeft, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { parseTransactions } from '../utils/parseTransactions';

const TransactionRow = ({ name, category, amount, status, isIncoming, icon: Icon = CreditCard }) => {
    const amountColor = isIncoming ? 'text-[#10B981]' : 'text-[#111827]';
    const iconBg = isIncoming ? 'bg-[#ECFDF5]' : 'bg-[#F3F4F6]';
    const iconColor = isIncoming ? '#10B981' : '#6B7280';
    
    return (
        <div className='flex items-center gap-4 py-4 border-b border-gray-50 last:border-0'>
            <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center shrink-0`}>
                <Icon size={20} color={iconColor} strokeWidth={1.5} />
            </div>
            <div className='flex-1 min-w-0'>
                <div className='text-[13px] font-semibold text-[#111827] truncate mb-1'>{name}</div>
                <div className='text-[11px] text-gray-500 font-medium'>{category || 'Transfer'}</div>
                {status && (
                    <div className={`text-[11px] mt-0.5 font-medium ${
                        status === 'Rejected' ? 'text-[#EF4444]' : 
                        status === 'Delivered' ? 'text-[#10B981]' : 
                        'text-gray-500'
                    }`}>
                        {status}
                    </div>
                )}
            </div>
            <div className={`text-sm font-bold ${amountColor}`}>
                {isIncoming ? '+' : '-'}{amount} AED
            </div>
        </div>
    );
};

const DateHeader = ({ date }) => (
    <div className='px-5 py-3 bg-[#F8F9FB] text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100'>
        {date}
    </div>
);

const Transactions = () => {
    const navigate = useNavigate();
    const transactions = React.useMemo(() => parseTransactions(), []);
    
    return (
        <div className='bg-[#F8F9FB] min-h-screen pb-24'>
            {/* Header */}
            <div className='bg-white px-5 pt-14 pb-4'>
                <div className='flex items-center gap-4'>
                    <button onClick={() => navigate(-1)} className='-ml-1 p-1 rounded-full hover:bg-gray-100 transition-colors'>
                        <ChevronLeft size={24} color="#1F2937" strokeWidth={2} />
                    </button>
                    <h1 className='text-[28px] font-medium text-[#111827] tracking-tight'>Transactions</h1>
                </div>
            </div>

            {/* Transactions List */}
            <div className='mt-4'>
                {transactions.map((group, index) => (
                    <div key={index} className='mb-1'>
                        <DateHeader date={group.date} />
                        <div className='bg-white px-5'>
                            {group.items.map((transaction, itemIndex) => (
                                <TransactionRow
                                    key={itemIndex}
                                    name={transaction.name}
                                    category={transaction.category}
                                    amount={transaction.amount}
                                    status={transaction.status}
                                    isIncoming={transaction.isIncoming}
                                    icon={transaction.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Transactions;
