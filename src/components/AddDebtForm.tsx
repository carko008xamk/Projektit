import React, { useState } from 'react';

type AddDebtFormProps = {
    onSubmit: (name: string, amount: number) => void;
};

const AddDebtForm: React.FC<AddDebtFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(name, amount);
        setName('');
        setAmount(0);
    };

    return (
        <div>
            <h2>Lisää uusi summa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Nimi:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Summa:
                    <input
                        type="number"
                        value={amount}
                        onChange={(event) => setAmount(Number(event.target.value))}
                    />
                </label>
                <button type="submit">Lisää summa</button>
            </form>
        </div>
    );
};

export default AddDebtForm;
