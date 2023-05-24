import React, { useState } from 'react';
import DebtsTable from './components/DebtsTable';
import ReceivablesTable from './components/ReceivablesTable';
import AddDebtForm from './components/AddDebtForm';

type Debt = {
    name: string;
    amount: number;
};

const App: React.FC = () => {
    const [debts, setDebts] = useState<Debt[]>([]);
    const [receivables, setReceivables] = useState<Debt[]>([]);

    const handleAddDebt = (name: string, amount: number) => {
        const newDebt = { name, amount };
        setDebts([...debts, newDebt]);
    };

    const handleAddReceivable = (name: string, amount: number) => {
        const newReceivable = { name, amount };
        setReceivables([...receivables, newReceivable]);
    };

    const handleDeleteDebt = (index: number) => {
        const newDebts = [...debts];
        newDebts.splice(index, 1);
        setDebts(newDebts);
    };

    const handleDeleteReceivable = (index: number) => {
        const newReceivable = [...receivables];
        newReceivable.splice(index, 1);
        setReceivables(newReceivable);
    };

    const totalDebt = debts.reduce((total, debt) => total + debt.amount, 0);
    const totalReceivable = receivables.reduce((total, receivable) => total + receivable.amount, 0);

    return (
        <div>
            <h1>Vippikirjanpito</h1>
            <DebtsTable debts={debts} onDelete={handleDeleteDebt} />
            <AddDebtForm onSubmit={handleAddDebt} />
            <ReceivablesTable receivables={receivables} onDelete={handleDeleteReceivable} />
            <AddDebtForm onSubmit={handleAddReceivable} />
            <div>
                <p>Velkasi on yhteensä {totalDebt} euroa</p>
                <p>Saatavasi on yhteensä {totalReceivable} euroa</p>
            </div>
        </div>
    );
};

export default App;








