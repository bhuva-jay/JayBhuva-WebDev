import React, { useState } from 'react';

const KiranaStoreAdmin = () => {
  const [glosoryDetails, setGlosoryDetails] = useState(JSON.parse(localStorage.getItem('glosoryDetails')) || []);
  const [salesmenDetails, setSalesmenDetails] = useState(JSON.parse(localStorage.getItem('salesmenDetails')) || []);

  const handleAddGlosoryDetail = (e) => {
    e.preventDefault();
    const newGlosoryDetail = { name: '', price: '', quantity: '' };
    setGlosoryDetails([...glosoryDetails, newGlosoryDetail]);
    localStorage.setItem('glosoryDetails', JSON.stringify([...glosoryDetails, newGlosoryDetail]));
  };

  const handleDeleteGlosoryDetail = (index) => {
    setGlosoryDetails(glosoryDetails.filter((_, i) => i !== index));
    localStorage.setItem('glosoryDetails', JSON.stringify(glosoryDetails.filter((_, i) => i !== index)));
  };

  const handleUpdateGlosoryDetail = (index, updatedGlosoryDetail) => {
    setGlosoryDetails(glosoryDetails.map((glosoryDetail, i) => (i === index ? updatedGlosoryDetail : glosoryDetail)));
    localStorage.setItem('glosoryDetails', JSON.stringify(glosoryDetails.map((glosoryDetail, i) => (i === index ? updatedGlosoryDetail : glosoryDetail))));
  };

  const handleAddSalesmenDetail = (e) => {
    e.preventDefault();
    const newSalesmenDetail = { name: '', contact: '' };
    setSalesmenDetails([...salesmenDetails, newSalesmenDetail]);
    localStorage.setItem('salesmenDetails', JSON.stringify([...salesmenDetails, newSalesmenDetail]));
  };

  const handleDeleteSalesmenDetail = (index) => {
    setSalesmenDetails(salesmenDetails.filter((_, i) => i !== index));
    localStorage.setItem('salesmenDetails', JSON.stringify(salesmenDetails.filter((_, i) => i !== index)));
  };

  const handleUpdateSalesmenDetail = (index, updatedSalesmenDetail) => {
    setSalesmenDetails(salesmenDetails.map((salesmenDetail, i) => (i === index ? updatedSalesmenDetail : salesmenDetail)));
    localStorage.setItem('salesmenDetails', JSON.stringify(salesmenDetails.map((salesmenDetail, i) => (i === index ? updatedSalesmenDetail : salesmenDetail))));
  };

  return (
    <div>
      <h1>Kirana Store Admin</h1>
      <h2>Glosory Details:</h2>
      <ul>
        {glosoryDetails.map((glosoryDetail, index) => (
          <li key={index}>
            {glosoryDetail.name} ({glosoryDetail.price}) - {glosoryDetail.quantity}
            <button onClick={() => handleDeleteGlosoryDetail(index)}>Delete</button>
            <button onClick={() => handleUpdateGlosoryDetail(index, { ...glosoryDetail, name: 'Updated Name' })}>
              Update
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddGlosoryDetail}>Add Glosory Detail</button>
      <h2>Salesmen Details:</h2>
      <ul>
      {salesmenDetails.map((salesmenDetail, index) => (
          <li key={index}>
            {salesmenDetail.name} ({salesmenDetail.contact})
            <button onClick={() => handleDeleteSalesmenDetail(index)}>Delete</button>
            <button onClick={() => handleUpdateSalesmenDetail(index, { ...salesmenDetail, name: 'Updated Name' })}>
              Update
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddSalesmenDetail}>Add Salesmen Detail</button>
    </div>
  );
};

export default KiranaStoreAdmin;
         