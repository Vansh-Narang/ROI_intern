import React, { useState } from "react";

const EMIForm = ({ onSubmit }) => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTenure, setLoanTenure] = useState("");
    const [prepayment, setPrepayment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loanAmount > 0 && interestRate > 0 && loanTenure > 0) {
            onSubmit({
                loanAmount: parseFloat(loanAmount),
                interestRate: parseFloat(interestRate),
                loanTenure: parseInt(loanTenure),
                prepayment: parseFloat(prepayment) || 0,
            });
        } else {
            alert("Please enter valid values");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="emi-form">
            <div>
                <label>Loan Amount</label>
                <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Interest Rate (%)</label>
                <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Loan Tenure (in months)</label>
                <input
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Prepayment/Extra EMI (Optional)</label>
                <input
                    type="number"
                    value={prepayment}
                    onChange={(e) => setPrepayment(e.target.value)}
                />
            </div>
            <button type="submit">Calculate EMI</button>
        </form>
    );
};

export default EMIForm;
