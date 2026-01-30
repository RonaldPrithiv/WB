import React from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useBalance } from '../context/BalanceContext';

const AddMoney = () => {
    const navigate = useNavigate();
    const { addToBalance } = useBalance();
    const [amount, setAmount] = React.useState('');

    const handleClose = () => {
        navigate('/home');
    };

    const handleAdd = () => {
        const value = parseFloat(amount);
        if (!isNaN(value) && value > 0) {
            addToBalance(value);
            navigate('/home');
        }
    };

    return (
        <div className='bg-[#F8F9FB] min-h-screen w-full px-5 pt-16 pb-24'>
            {/* Header */}
            <div className='flex justify-between items-center mb-12'>
                <h1 className='text-[28px] font-medium text-[#111827] tracking-tight'>Add money</h1>
                <button 
                    onClick={handleClose} 
                    className='p-2 rounded-full hover:bg-gray-100 transition-colors'
                >
                    <X size={20} strokeWidth={2} className="text-[#111827]" />
                </button>
            </div>

            {/* Content */}
            <div className='bg-white rounded-[24px] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)]' style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
                <p className='text-center text-sm text-gray-600 mb-8 font-medium'>
                    Enter the amount you want to add to your balance.
                </p>
                
                <div className='mb-8' style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border-2 border-[#3B82F6] rounded-full px-5 py-4 text-lg font-semibold text-[#111827] bg-gray-50 outline-none focus:bg-white focus:border-[#3B82F6] transition-colors text-center"
                        placeholder="0.00"
                        autoFocus
                        style={{ width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}
                    />
                </div>

                <button
                    onClick={handleAdd}
                    className="w-full bg-[#111827] text-white rounded-full text-sm font-semibold uppercase tracking-wide flex items-center justify-center hover:bg-[#1F2937] transition-colors shadow-lg"
                    style={{ padding: '14px 24px', minHeight: '48px' }}
                >
                    Add to balance
                </button>
            </div>
        </div>
    );
};

export default AddMoney;


