import React from 'react';
import { ScanLine, Plus, ArrowUpRight, ArrowDownLeft, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { getRecentTransactions } from '../utils/parseTransactions';

const TransactionItem = ({ type, name, amount, status, date, isIncoming }) => {
  return (
    <div className='flex gap-3 items-center py-4 border-b border-gray-50 last:border-0'>
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isIncoming ? 'bg-purple-100 text-purple-600' : 'bg-purple-100 text-purple-600'}`}>
        {isIncoming ? <ArrowDownLeft size={20} strokeWidth={2} /> : <ArrowUpRight size={20} strokeWidth={2} />}
      </div>
      <div className='flex-1 min-w-0'>
        <div className='text-[13px] font-semibold text-[#111827] truncate pr-2'>{name}</div>
        <div className='text-[11px] text-gray-500 font-medium'>{status || 'Transfer'}</div>
      </div>
      <div className={`text-[13px] font-bold ${isIncoming ? 'text-[#10B981]' : 'text-[#111827]'}`}>
        {isIncoming ? '+' : ''}{amount} AED
      </div>
    </div>
  );
};

const PayeeCircle = ({ name, label, isNew, color = 'bg-gray-100' }) => (
  <div className='flex flex-col items-center gap-2 min-w-[72px] cursor-pointer'>
    <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center relative ${isNew ? 'border border-[#1F2937] bg-white text-[#1F2937]' : 'bg-white shadow-sm'}`}>
      {isNew ? (
        <Plus size={24} strokeWidth={2} />
      ) : (
        <div className={`w-full h-full rounded-full flex items-center justify-center text-lg font-medium text-[#1F2937] ${color}`}>
          {name ? name.charAt(0) : ''}
        </div>
      )}
      {/* Wio badge for some */}
      {!isNew && name !== 'Ronald' && (
        <div 
          className='absolute bottom-0 right-0 rounded-full flex items-center justify-center text-white font-bold border-2 border-white' 
          style={{ 
            width: '16px', 
            height: '16px', 
            backgroundColor: '#D1D5DB',
            transform: 'translate(40%, 40%)',
            borderRadius: '50%',
            fontSize: '6px'
          }}
        >
          W
        </div>
      )}
    </div>
    <span className='text-[11px] text-center text-gray-600 font-medium truncate w-full px-1'>{label}</span>
  </div>
);


const Payments = () => {
  const recentTransactions = React.useMemo(() => getRecentTransactions(5), []);
  
  return (
    <div className='bg-[#F8F9FB] min-h-screen pb-24 px-5 pt-14'>

      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-[28px] font-medium text-[#111827]'>Payments</h1>
        <div className='flex gap-2'>
          <button className='p-2 rounded-full hover:bg-gray-100'><ScanLine size={24} color="#1F2937" strokeWidth={1.5} /></button>
          <button className='p-2 rounded-full bg-[#111827] text-white'><Plus size={24} strokeWidth={1.5} /></button>
        </div>
      </div>

      {/* Tabs */}
      <div className='flex gap-2 mb-8'>
        <button className='px-5 py-2 bg-[#111827] text-white rounded-full text-[13px] font-medium shadow-md'>Local</button>
        <button className='px-5 py-2 bg-white text-gray-500 border border-gray-100 rounded-full text-[13px] font-medium'>International</button>
        <button className='px-5 py-2 bg-white text-gray-500 border border-gray-100 rounded-full text-[13px] font-medium'>Bills</button>
      </div>

      {/* Send money to */}
      <div className='mb-8'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-[19px] font-semibold text-[#111827]'>Send money to</h3>
          <button className='text-sm text-[#7C3AED] font-semibold'>View all</button>
        </div>
        <div className='flex gap-1 overflow-x-auto no-scrollbar pb-2 -mx-5 px-5'>
          <PayeeCircle isNew label="New Payee" />
          <PayeeCircle name="Ronald" label="Ronald" color="bg-gray-50" />
          <PayeeCircle name="Pandiaraj" label="Pandiaraj Sa..." color="bg-gray-50" />
          {/* Add dummy to match potential scroll */}
          <PayeeCircle name="Sam" label="Sam" color="bg-gray-50" />
        </div>
      </div>

      {/* Transactions */}
      <div>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-[19px] font-semibold text-[#111827]'>Transactions</h3>
          <NavLink to="/transactions" className='text-sm text-[#7C3AED] font-semibold'>See all</NavLink>
        </div>

        <div className='bg-white rounded-[24px] p-2 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#F3F4F6]'>
          <div className='p-2'>
            {recentTransactions.map((transaction, index) => {
              const Icon = transaction.icon;
              return (
                <div key={index} className='flex gap-3 items-center py-4 border-b border-gray-50 last:border-0'>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    transaction.isIncoming ? 'bg-[#ECFDF5]' : 'bg-[#F3F4F6]'
                  }`}>
                    <Icon size={20} color={transaction.isIncoming ? '#10B981' : '#6B7280'} strokeWidth={1.5} />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <div className='text-[13px] font-semibold text-[#111827] truncate pr-2'>{transaction.name}</div>
                    <div className='text-[11px] text-gray-500 font-medium'>{transaction.category || 'Transfer'}</div>
                  </div>
                  <div className={`text-[13px] font-bold ${transaction.isIncoming ? 'text-[#10B981]' : 'text-[#111827]'}`}>
                    {transaction.isIncoming ? '+' : ''}{transaction.amount} AED
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Payments;
