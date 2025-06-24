import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We're here to help and answer any questions you might have.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
              </div>
              <h2 className="font-semibold text-xl text-gray-800">Our Location</h2>
            </div>
            <p className="text-gray-600">
            Jl. Kapten Patimura, Tawangsari, Satu, Kateguhan, Kec. Sukoharjo, Kabupaten Sukoharjo, Jawa Tengah 57561<br />
  
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <FaEnvelope className="text-purple-600 text-xl" />
              </div>
              <h2 className="font-semibold text-xl text-gray-800">Email Us</h2>
            </div>
            <div className="space-y-2">
              <a 
                href="mailto:SMKTB@gmail.com" 
                className="block text-blue-600 hover:text-blue-800 transition-colors"
              >
                SMKTB@gmail.com
              </a>
              <a 
                href="mailto:SMKTB@gmail.com" 
                className="block text-blue-600 hover:text-blue-800 transition-colors"
              >
                
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <FaPhoneAlt className="text-green-600 text-xl" />
              </div>
              <h2 className="font-semibold text-xl text-gray-800">Call Us</h2>
            </div>
            <div className="space-y-2">
              <a 
                href="tel:(0272) 881119" 
                className="block text-blue-600 hover:text-blue-800 transition-colors"
              >
                (0272) 881119
              </a>
              <p className="text-sm text-gray-500">
                Monday - Friday, 7AM - 4PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
