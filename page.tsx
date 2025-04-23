'use client';
import { useState } from 'react';

export default function Home() {
  const [businesses, setBusinesses] = useState([]);
  const [newBusiness, setNewBusiness] = useState({ name: '', industry: '', contactEmail: '' });

  const addBusiness = () => {
    setBusinesses([...businesses, newBusiness]);
    setNewBusiness({ name: '', industry: '', contactEmail: '' });
  };

  return (
    <main className='p-4 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4'>Trenvono AI Platform</h1>
      <div className='space-y-2 mb-4'>
        <input className='border p-2 w-full' placeholder='Business Name' value={newBusiness.name} onChange={(e) => setNewBusiness({ ...newBusiness, name: e.target.value })} />
        <input className='border p-2 w-full' placeholder='Industry Type' value={newBusiness.industry} onChange={(e) => setNewBusiness({ ...newBusiness, industry: e.target.value })} />
        <input className='border p-2 w-full' placeholder='Contact Email' value={newBusiness.contactEmail} onChange={(e) => setNewBusiness({ ...newBusiness, contactEmail: e.target.value })} />
        <button className='bg-black text-white px-4 py-2 rounded' onClick={addBusiness}>Add Business</button>
      </div>
      <ul className='space-y-2'>
        {businesses.map((biz, idx) => (
          <li key={idx} className='border rounded-xl p-3 shadow'>
            <h3 className='text-lg font-medium'>{biz.name}</h3>
            <p className='text-sm'>Industry: {biz.industry}</p>
            <p className='text-sm'>Contact: {biz.contactEmail}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}