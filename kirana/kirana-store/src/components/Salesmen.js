import React, { useState } from 'react';

const Salesmen = () => {
  const [buyerDetails, setBuyerDetails] = useState(JSON.parse(localStorage.getItem('buyerDetails')) || []);
  const [bills, setBills] = useState(JSON.parse(localStorage.getItem('bills')) || []);

  const handleAddBuyerDetail = (e) => {
    e.preventDefault();
    const newBuyerDetail = { name: '', contact: '' };
    setBuyerDetails([...buyerDetails, newBuyerDetail]);
    localStorage.setItem('buyerDetails', JSON.stringify([...buyerDetails, newBuyerDetail]));
  };

  const handleDeleteBuyerDetail = (index) => {
    setBuyerDetails(buyerDetails.filter((_, i) => i !== index));
    localStorage.setItem('buyerDetails', JSON.stringify(buyerDetails.filter((_, i) => i !== index)));
  };

  const handleUpdateBuyerDetail = (index, updatedBuyerDetail) => {
    setBuyerDetails(buyerDetails.map((buyerDetail, i) => (i === index ? updatedBuyerDetail : buyerDetail)));
    localStorage.setItem('buyerDetails', JSON.stringify(buyerDetails.map((buyerDetail, i) => (i === index ? updatedBuyerDetail : buyerDetail))));
  };

  const handleGenerateBill = (e) => {
    e.preventDefault();
    const newBill = { date: new Date(), amount: 0 };
    setBills([...bills, newBill]);
    localStorage.setItem('bills', JSON.stringify([...bills, newBill]));
  };

  return (
    <div>
      <h1>Salesmen</h1>
      <h2>Buyer Details:</h2>
      <ul>
        {buyerDetails.map((buyerDetail, index) => (
          <li key={index}>
            {buyerDetail.name} ({buyerDetail.contact})
            <button onClick={() => handleDeleteBuyerDetail(index)}>Delete</button>
            <button onClick={() => handleUpdateBuyerDetail(index, { ...buyerDetail, name: 'Updated Name' })}>
              Update
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddBuyerDetail}>Add Buyer Detail</button>
      <h2>Bills:</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>
            {bill.date} - {bill.amount}
          </li>
        ))}
      </ul>
      <button onClick={handleGenerateBill}>Generate Bill</button>
    </div>
  );
};

export default Salesmen;