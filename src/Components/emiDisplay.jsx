import React from "react";

const EMIDisplay = ({ emi, totalInterest, totalAmount, savings }) => {
    return (
        <div className="emi-results">
            <h2>EMI Results</h2>
            <p>Monthly EMI: {emi.toFixed(2)}</p>
            <p>Total Interest Payable: {totalInterest.toFixed(2)}</p>
            <p>Total Amount Payable: {totalAmount.toFixed(2)}</p>
            {savings && <p>Interest Saved with Prepayment: {savings.toFixed(2)}</p>}
        </div>
    );
};

export default EMIDisplay;
