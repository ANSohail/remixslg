
import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white font-serif px-4">
      <h1 className="text-4xl font-semibold text-theme-blue mb-6">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
        We have received your consultation request. One of our team members will contact you within 24 hours.
      </p>
      <Link
        to="/"
        className="bg-theme-blue text-white px-6 py-3 rounded hover:bg-theme-blue/90 transition"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default ThankYou;
