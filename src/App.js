import React, { useState } from "react";
import EMIForm from "./Components/emiForm";
import EMIDisplay from "./Components/emiDisplay";
import MonthBreakdown from "./Components/monthly";
import ThemeToggle from "./Components/theme";
import "./App.css";

const App = () => {
  const [emiData, setEmiData] = useState(null);
  const [breakdown, setBreakdown] = useState([]);

  const calculateEMI = ({ loanAmount, interestRate, loanTenure, prepayment }) => {
    const monthlyRate = interestRate / 12 / 100;
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTenure)) / (Math.pow(1 + monthlyRate, loanTenure) - 1);
    const totalInterest = emi * loanTenure - loanAmount;
    const totalAmount = emi * loanTenure;

    const monthBreakdown = [];
    let remainingBalance = loanAmount;

    for (let i = 1; i <= loanTenure; i++) {
      const interestPaid = remainingBalance * monthlyRate;
      const principalPaid = emi - interestPaid;
      remainingBalance -= principalPaid;

      monthBreakdown.push({
        emi,
        interestPaid,
        principalPaid,
        balance: remainingBalance,
      });
    }
    let savings = 0;
    if (prepayment) {
      savings = totalInterest - (prepayment * loanTenure);
    }

    setEmiData({
      emi,
      totalInterest,
      totalAmount,
      savings,
    });
    setBreakdown(monthBreakdown);
  };

  return (
    <div className="App">
      <ThemeToggle toggleTheme={() => document.body.classList.toggle("dark-theme")} />
      <EMIForm onSubmit={calculateEMI} />
      {emiData && (
        <>
          <EMIDisplay
            emi={emiData.emi}
            totalInterest={emiData.totalInterest}
            totalAmount={emiData.totalAmount}
            savings={emiData.savings}
          />
          <MonthBreakdown breakdown={breakdown} />
        </>
      )}
    </div>
  );
};

export default App;
