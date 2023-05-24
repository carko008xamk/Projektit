import React from 'react';

type ReceivablesTableProps = {
    receivables: { name: string; amount: number }[];
    onDelete: (index: number) => void;
};

const ReceivablesTable: React.FC<ReceivablesTableProps> = ({
    receivables,
    onDelete,
}) => {
    return (
        <div>
            <h2>Saatavat</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nimi</th>
                        <th>Summa</th>
                        <th>Poista saatava</th>
                    </tr>
                </thead>
                <tbody>
                    {receivables.map((receivable, index) => (
                        <tr key={index}>
                            <td>{receivable.name}</td>
                            <td>{receivable.amount}</td>
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

export default ReceivablesTable;
