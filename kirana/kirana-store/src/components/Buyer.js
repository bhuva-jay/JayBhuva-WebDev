import React, { useState } from 'react';

const Buyer = () => {
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')) || {});
  const [bills, setBills] = useState(JSON.parse(localStorage.getItem('bills')) || []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updatedProfile = { ...profile, name: 'Updated Name' };
    setProfile(updatedProfile);
    localStorage.setItem('profile', JSON.stringify(updatedProfile));
  };

  return (
    <div>
      <h1>Buyer</h1>
      <h2>Profile:</h2>
      <p>
        {profile.name} ({profile.contact})
      </p>
      <button onClick={handleUpdateProfile}>Update Profile</button>
      <h2>Bills:</h2>
      <ul>
        {bills.map((bill, index) => (
          <li key={index}>
            {bill.date} - {bill.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buyer;