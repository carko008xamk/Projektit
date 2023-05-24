import React from 'react';
import './DebtsTable.css';

type DebtsTableProps = {
    debts: { name: string; amount: number }[];
    onDelete: (index: number) => void;
};

const DebtsTable: React.FC<DebtsTableProps> = ({ debts, onDelete }) => {
    return (
        <div>
            <h2 className="table-header">Velat</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Summa</th>
                        <th>Poista velka</th>
                    </tr>
                </thead>
                <tbody>
                    {debts.map((debt, index) => (
                        <tr key={index}>
                            <td>{debt.name}</td>
                            <td>{debt.amount}</td>
                            <td>
                                <button onClick={() => onDelete(index)}>Poista</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DebtsTable;
