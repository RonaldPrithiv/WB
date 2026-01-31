import { ArrowDownLeft, ArrowUpRight, CreditCard, ShoppingBag, Server, Globe } from 'lucide-react';

// CSV data
const csvData = `Date,Ref. Number,Description,"Amount
 (Incl. VAT)","Balance
 (AED)"
10/07/2025,P326008659,From PANDIARAJ SAMADHARAMAN,"1,000","1,000"
13/07/2025,P726200636,Lovable (rate: 3.7),-92.5,907.5
13/07/2025,P726305228,Foreign exchange transaction fee,-1.85,905.65
13/07/2025,P050460012,Lovable (rate: 3.7),-92.5,813.15
13/07/2025,P050531235,Foreign exchange transaction fee,-1.85,811.3
18/07/2025,P626761447,From PANDIARAJ SAMADHARAMAN,"60,000","60,811.30"
18/07/2025,P051052702,To Pandiaraj Samadharaman Samadharman (rate: 1.0000),"-28,306.45","32,504.85"
19/07/2025,P926924148,To Ronald (rate: 1.0000),"-22,383.87","10,120.98"
21/07/2025,P927183950,From PANDIARAJ SAMADHARAMAN,"50,000","60,120.98"
21/07/2025,P727200004,To Pandiaraj Samadharaman Samadharman (rate: 1.0000),"-32,500","27,620.98"
21/07/2025,P251384445,To Ronald (rate: 1.0000),"-25,700","1,920.98"
22/07/2025,P827248924,Cursor ai powered ide (rate: 3.7),-174,"1,746.98"
22/07/2025,P827321609,Foreign exchange transaction fee,-3.48,"1,743.50"
24/07/2025,P927495806,Cursor ai powered ide (rate: 3.7),-174,"1,569.50"
25/07/2025,P832898834,Hetzner online (rate: 3.7),-508.2,"1,061.30"
28/07/2025,P731735791,From PANDIARAJ SAMADHARAMAN,"60,000","61,061.30"
28/07/2025,P052185011,To Pandiaraj Samadharaman Samadharman (rate: 1.0000),"-32,500","28,561.30"
28/07/2025,P927948271,To Ronald (rate: 1.0000),"-25,700","2,861.30"
28/07/2025,P650601773,From Ronald Prithiv Pandiaraj Pandiaraj (rate: 1.0000),700,"3,561.30"
03/08/2025,P928659515,OpenAI (rate: 3.7),-19.42,"3,541.88"
03/08/2025,P928819955,Foreign exchange transaction fee,-0.38,"3,541.50"
09/08/2025,P737484910,Google One,-76.99,"3,464.51"
09/08/2025,P429448960,Foreign exchange transaction fee,-0.07,"3,464.44"
13/08/2025,P329810621,Lovable (rate: 3.7),-185,"3,279.44"
13/08/2025,P329995220,Foreign exchange transaction fee,-3.7,"3,275.74"
22/08/2025,P831025325,Cursor ai powered ide (rate: 3.7),-174,"3,101.74"
25/08/2025,P832898834,Hetzner online (rate: 3.7),-856.3,"2,245.44"
25/08/2025,P831104347,Foreign exchange transaction fee,-3.48,"2,241.96"
25/08/2025,P055588199,Subscription fee for Aug 2025,-99,"2,142.96"
25/08/2025,P055512091,Cursor ai powered ide (rate: 3.7),-174,"1,968.96"
25/08/2025,P055704830,Foreign exchange transaction fee,-3.48,"1,965.48"
27/08/2025,P731735791,From PANDIARAJ SAMADHARAMAN,"60,000","61,965.48"
28/08/2025,P931816810,To Ronald (rate: 1.0000),"-25,700","36,265.48"
28/08/2025,P650601773,From Ronald Prithiv Pandiaraj Pandiaraj (rate: 1.0000),700,"36,965.48"
28/08/2025,P431803990,To Pandiaraj Samadharaman Samadharman (rate: 1.0000),"-32,500","4,465.48"
29/08/2025,P256149278,Thirdweb starter plan (rate: 3.7),-18.5,"4,448.98"
06/09/2025,P833118254,Foreign exchange transaction fee,-2.85,"4,444.13"
09/09/2025,P633259207,Google One,-76.99,"4,367.14"
09/09/2025,P633478232,Foreign exchange transaction fee,-1.53,"4,365.61"
10/09/2025,P533533984,To Ronald (rate: 1.0000),-834,"3,531.61"
13/09/2025,P158241332,Lovable (rate: 3.7),-185,"3,346.61"
13/09/2025,P158433969,Foreign exchange transaction fee,-3.7,"3,342.91"
22/09/2025,P259388140,To Ronald (rate: 1.0000),-100,"3,242.91"
22/09/2025,P635138210,Cursor ai powered ide (rate: 3.7),-174,"3,068.91"
22/09/2025,P635232498,Foreign exchange transaction fee,-3.48,"3,065.43"
24/09/2025,P259667453,Runninghub ai (rate: 3.7),-36.63,"3,028.80"
24/09/2025,P259765029,Foreign exchange transaction fee,-0.73,"3,028.07"
25/09/2025,P832898834,Hetzner online (rate: 3.7),-856.3,"2,171.77"
25/09/2025,P535556428,Subscription fee for Sep 2025,-99,"2,072.77"
25/09/2025,P935486356,Cursor ai powered ide (rate: 3.7),-174,"1,898.77"
25/09/2025,P935716328,Foreign exchange transaction fee,-3.48,"1,895.29"
28/09/2025,P260138838,Dnh godaddy com (rate: 0.04142574),-5.23,"1,890.06"
28/09/2025,P260320191,Foreign exchange transaction fee,-0.1,"1,889.96"
29/09/2025,P260347389,From PANDIARAJ SAMADHARAMAN,"58,200","60,089.96"
29/09/2025,P936175855,To Pandiaraj Samadharaman Samadharman (rate: 1.0000),"-32,500","27,589.96"
29/09/2025,P941092595,To Ronald (rate: 1.0000),"-25,700","1,889.96"
29/09/2025,P650601773,From Ronald Prithiv Pandiaraj Pandiaraj (rate: 1.0000),700,"2,589.96"
09/10/2025,P737484910,Google One,-76.99,"2,512.97"
09/10/2025,P737878231,Foreign exchange transaction fee,-1.53,"2,511.44"
13/10/2025,P062473086,Lovable (rate: 3.7),-185,"2,326.44"
13/10/2025,P062670830,Foreign exchange transaction fee,-3.7,"2,322.74"
22/10/2025,P063886526,Cursor ai powered ide (rate: 3.7),-174,"2,148.74"
22/10/2025,P063972278,Foreign exchange transaction fee,-3.48,"2,145.26"
25/10/2025,P832898834,Hetzner online (rate: 3.7),-856.3,"1,288.96"
25/10/2025,P340043332,Subscription fee for Oct 2025,-99,"1,189.96"
25/10/2025,P063886526,Cursor ai powered ide (rate: 3.7),-174,"1,015.96"
25/10/2025,P063972278,Foreign exchange transaction fee,-3.48,"1,012.48"
31/10/2025,P341053181,From PANDIARAJ SAMADHARAMAN,"25,700","26,712.48"
31/10/2025,P941092595,To Ronald (rate: 1.0000),"-25,700","1,012.48"
31/10/2025,P650601773,From Ronald Prithiv Pandiaraj Pandiaraj (rate: 1.0000),1400,"2,412.48"
01/11/2025,P941202068,DigitalOcean (rate: 3.7),-161.1,"2,251.38"
01/11/2025,P941342617,Foreign exchange transaction fee,-0.32,"2,251.06"
09/11/2025,P542157489,Google One,-76.99,"2,174.07"
09/11/2025,P542524403,Foreign exchange transaction fee,-1.53,"2,172.54"
12/11/2025,P542796729,Ovh us llc (rate: 3.7),-565.1,"1,607.44"
12/11/2025,P542988528,Foreign exchange transaction fee,-11.302,"1,596.14"
22/11/2025,P269068434,Cursor ai powered ide (rate: 3.7),-174,"1,422.14"
22/11/2025,P444820033,Foreign exchange transaction fee,-3.48,"1,418.66"
25/11/2025,P444820033,Subscription fee for Nov 2025,-99,"1,319.66"
25/11/2025,P845424259,Cursor ai powered ide (rate: 3.7),-174,"1,145.66"
25/11/2025,P269672631,Foreign exchange transaction fee,-3.48,"1,142.18"
28/11/2025,P845424259,From PANDIARAJ SAMADHARAMAN,"25,700","26,842.18"
28/11/2025,P269672631,To Ronald (rate: 1.0000),"-25,700","1,142.18"
22/12/2025,P548970397,Cursor ai powered ide (rate: 3.7),-174,968.18
22/12/2025,P274031177,Foreign exchange transaction fee,-3.48,964.7
25/12/2025,P274031177,Cursor ai powered ide (rate: 3.7),-174,790.7
25/12/2025,P549484045,Foreign exchange transaction fee,-3.48,787.22
27/12/2025,P274031177,From PANDIARAJ SAMADHARAMAN,"25,700","26,487.22"
27/12/2025,P549484045,Subscription fee for Dec 2025,-99,"26,388.22"
27/12/2025,P849832072,To Ronald (rate: 1.0000),"-25,700",688.22
05/01/2026,P174987254,Ovh us llc (rate: 3.7),-683.85,4.37
29/01/2026,P279182768,From PANDIARAJ SAMADHARAMAN,"25,700","25,704.37"
29/01/2026,P654970382,To Ronald (rate: 1.0000),"-25,700",4.37
29/01/2026,P650601773,From Ronald Prithiv Pandiaraj Pandiaraj (rate: 1.0000),700,704.37
29/01/2026,P854307145,Subscription fee for Jan 2026,-99,605.37
29/01/2026,P279182768,Google One,76.99,528.38
29/01/2026,P854307145,Foreign exchange transaction fee,-3.48,524.9
30/01/2026,P279182768,Cursor ai powered ide (rate: 3.7),-174,350.9
30/01/2026,P854307145,Foreign exchange transaction fee,-3.48,347.42
30/01/2026,P279182768,Cursor ai powered ide (rate: 3.7),-174,173.42
30/01/2026,P854307145,Foreign exchange transaction fee,-3.48,169.94`;

function parseCSV(csvText) {
    const lines = csvText.split('\n').filter(line => line.trim());
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    const transactions = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;
        
        // Parse CSV line (handling quoted values with commas)
        const values = [];
        let current = '';
        let inQuotes = false;
        
        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(current.trim());
                current = '';
            } else {
                current += char;
            }
        }
        values.push(current.trim());
        
        if (values.length >= 4) {
            const date = values[0];
            const refNumber = values[1];
            const description = values[2].replace(/"/g, '');
            const amount = values[3].replace(/"/g, '').replace(/,/g, '');
            const balance = values[4] ? values[4].replace(/"/g, '').replace(/,/g, '') : '';
            
            transactions.push({
                date,
                refNumber,
                description,
                amount: parseFloat(amount) || 0,
                balance: parseFloat(balance) || 0
            });
        }
    }
    
    return transactions;
}

function formatDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    const date = new Date(year, month - 1, day);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 
                   'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];
    
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}

function getIcon(description) {
    const desc = description.toLowerCase();
    if (desc.includes('from') || desc.includes('to')) {
        return desc.includes('from') ? ArrowDownLeft : ArrowUpRight;
    }
    if (desc.includes('google') || desc.includes('lovable') || desc.includes('cursor') || 
        desc.includes('openai') || desc.includes('thirdweb') || desc.includes('runninghub')) {
        return ShoppingBag;
    }
    if (desc.includes('hetzner') || desc.includes('digitalocean') || desc.includes('ovh') || 
        desc.includes('godaddy') || desc.includes('subscription')) {
        return Server;
    }
    if (desc.includes('foreign exchange')) {
        return Globe;
    }
    return CreditCard;
}

function formatAmount(amount) {
    const absAmount = Math.abs(amount);
    if (absAmount >= 1000) {
        return absAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    return absAmount.toFixed(2);
}

export function parseTransactions() {
    const rawTransactions = parseCSV(csvData);
    
    // Group by date
    const grouped = {};
    rawTransactions.forEach(tx => {
        if (!grouped[tx.date]) {
            grouped[tx.date] = [];
        }
        grouped[tx.date].push(tx);
    });
    
    // Convert to UI format
    const result = Object.keys(grouped)
        .sort((a, b) => {
            // Sort dates descending (newest first)
            const [d1, m1, y1] = a.split('/').map(Number);
            const [d2, m2, y2] = b.split('/').map(Number);
            const date1 = new Date(y1, m1 - 1, d1);
            const date2 = new Date(y2, m2 - 1, d2);
            return date2 - date1;
        })
        .map(date => {
            const transactions = grouped[date]
                .filter(tx => {
                    // Skip foreign exchange fees as separate entries (they're already included)
                    return !tx.description.toLowerCase().includes('foreign exchange transaction fee');
                })
                .map(tx => {
                    const isIncoming = tx.amount > 0;
                    const formattedAmount = formatAmount(tx.amount);
                    
                    return {
                        name: tx.description,
                        category: isIncoming ? 'Transfer' : 
                                tx.description.toLowerCase().includes('subscription') ? 'Subscription' :
                                tx.description.toLowerCase().includes('rate') ? 'Payment' : 'Transaction',
                        amount: formattedAmount,
                        status: 'Delivered',
                        isIncoming,
                        icon: getIcon(tx.description),
                        refNumber: tx.refNumber,
                        date: date
                    };
                });
            
            return {
                date: formatDate(date),
                items: transactions
            };
        });
    
    return result;
}

// Get most recent transactions as a flat list
export function getRecentTransactions(limit = 5) {
    const rawTransactions = parseCSV(csvData);
    
    // Filter and convert to UI format, then sort by date (newest first)
    const transactions = rawTransactions
        .filter(tx => {
            // Skip foreign exchange fees as separate entries
            return !tx.description.toLowerCase().includes('foreign exchange transaction fee');
        })
        .map(tx => {
            const isIncoming = tx.amount > 0;
            const formattedAmount = formatAmount(tx.amount);
            
            return {
                name: tx.description,
                category: isIncoming ? 'Transfer' : 
                        tx.description.toLowerCase().includes('subscription') ? 'Subscription' :
                        tx.description.toLowerCase().includes('rate') ? 'Payment' : 'Transaction',
                amount: formattedAmount,
                status: 'Delivered',
                isIncoming,
                icon: getIcon(tx.description),
                refNumber: tx.refNumber,
                date: tx.date
            };
        })
        .sort((a, b) => {
            // Sort by date descending (newest first)
            const [d1, m1, y1] = a.date.split('/').map(Number);
            const [d2, m2, y2] = b.date.split('/').map(Number);
            const date1 = new Date(y1, m1 - 1, d1);
            const date2 = new Date(y2, m2 - 1, d2);
            return date2 - date1;
        })
        .slice(0, limit);
    
    return transactions;
}

