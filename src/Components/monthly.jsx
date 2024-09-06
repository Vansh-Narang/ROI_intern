import React from "react";

const MonthBreakdown = ({ breakdown }) => {
    return (
        <div className="month-breakdown">
            <h2>Month-wise Breakdown</h2>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>EMI Paid</th>
                        <th>Interest Paid</th>
                        <th>Principal Paid</th>
                        <th>Remaining Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {breakdown.map((month, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{month.emi.toFixed(2)}</td>
                            <td>{month.interestPaid.toFixed(2)}</td>
                            <td>{month.principalPaid.toFixed(2)}</td>
                            <td>{month.balance.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MonthBreakdown;
