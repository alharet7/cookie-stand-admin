"use client"
import React, { useState, FormEvent } from 'react';

export default function Home() {
  const [location, setLocation] = useState('');
  const [minCustomers, setMinCustomers] = useState('0');
  const [maxCustomers, setMaxCustomers] = useState('0');
  const [avgCookies, setAvgCookies] = useState('0');
  const [cookieStandData, setCookieStandData] = useState<any[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newCookieStand = {
      Location: location,
      Min: parseInt(minCustomers),
      Max: parseInt(maxCustomers),
      Avg: parseFloat(avgCookies),
    };

    setCookieStandData([...cookieStandData, newCookieStand]);
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <form className="w-2/3 bg-white p-6 rounded shadow-lg" onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold mb-4">Create Cookie Stand</h1>
      </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold text-sm mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full border border-gray-300 p-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mb-4">
          <div className="md:w-1/3 pr-2 mb-4 md:mb-0">
            <label htmlFor="minCustomers" className="block text-gray-700 font-bold text-sm mb-2">
              Minimum Customers Per Hour
            </label>
            <input
              type="number"
              id="minCustomers"
              className="w-full border border-gray-300 p-2 rounded"
              value={minCustomers}
              onChange={(e) => setMinCustomers(e.target.value)}
            />
          </div>
          <div className="md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="maxCustomers" className="block text-gray-700 font-bold text-sm mb-2">
              Maximum Customers Per Hour
            </label>
            <input
              type="number"
              id="maxCustomers"
              className="w-full border border-gray-300 p-2 rounded"
              value={maxCustomers}
              onChange={(e) => setMaxCustomers(e.target.value)}
            />
          </div>
          <div className="md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="avgCookies" className="block text-gray-700 font-bold text-sm mb-2">
              Average Cookies Per Sale
            </label>
            <input
              type="number"
              id="avgCookies"
              className="w-full border border-gray-300 p-2 rounded"
              value={avgCookies}
              onChange={(e) => setAvgCookies(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
            Create
          </button>
        </div>
        <div className="w-2/3 bg-white p-6 rounded shadow-lg mt-8 mx-auto">
          <pre>{JSON.stringify(cookieStandData[cookieStandData.length - 1], null, 0)}</pre>
        </div>
      </form>
    </div>
  );
}
