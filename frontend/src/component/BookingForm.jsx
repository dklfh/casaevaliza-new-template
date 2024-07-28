import React from 'react';

const BookingForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 my-20">
      <h1 className="text-[50px] font-island text-gray-800 mb-4">Book Now</h1>
      <hr className="mb-6" />
      <form className="space-y-4 font-gilda">
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="name">Enter Your Name :</label>
          <input
            id="name"
            type="text"
            className="mt-1 md:mt-0 md:ml-2 p-2 border border-gray-300 rounded w-full md:flex-1"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="email">E-mail Address :</label>
          <input
            id="email"
            type="email"
            className="mt-1 md:mt-0 md:ml-2 p-2 border border-gray-300 rounded w-full md:flex-1"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="phone">Phone Number :</label>
          <input
            id="phone"
            type="tel"
            className="mt-1 md:mt-0 md:ml-2 p-2 border border-gray-300 rounded w-full md:flex-1"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="nationality">Nationality :</label>
          <select
            id="nationality"
            className="mt-1 md:mt-0 md:ml-2 p-2 border border-gray-300 rounded w-full md:flex-1"
          >
            <option>-- select one --</option>
            <option value="indonesia">Indonesia</option>
            <option value="america">America</option>
            <option value="japan">Japan</option>
            <option value="australia">Australia</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="checkin">Check In :</label>
          <input
            id="checkin"
            type="date"
            className="mt-1 md:mt-0 md:ml-2 p-2 border border-gray-300 rounded w-full md:flex-1"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="checkout">Check Out :</label>
          <input
            id="checkout"
            type="date"
            className="mt-1 md:mt-0 md:ml-2 p-2 border border-gray-300 rounded w-full md:flex-1"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center">
          <label className="md:w-1/4" htmlFor="persons">Number of Person :</label>
          <input
            id="persons"
            type="number"
            className="mt-1 md:mt-0 md:ml-2 p-2 border border-gray-300 rounded w-full md:flex-1"
          />
        </div>
        <div className="flex items-center">
          <input id="copy" type="checkbox" className="mr-2" />
          <label htmlFor="copy">Email a copy of this booking to your own address</label>
        </div>
        <div className="mt-4">
          <div className="g-recaptcha" data-sitekey="your-site-key"></div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full md:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded"
        >
          Send Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
