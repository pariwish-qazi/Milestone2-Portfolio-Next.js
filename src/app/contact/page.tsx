import Link from "next/link";
import React from "react";

function contact ()  {
    return (
      <div className="bg-pink-300">
          <div className="bg-blue-950 pb-5 rounded-xl shadow-xl md:px-47 mx-4  ">
         <div className="relative max-w-3xl mx-auto w-full px-5 py-8 bg-black-700 rounded-lg z-10 mt-12 ">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Get in Touch</h2>
         
          <div className="border-t-2 border-blue-900 pt-4">
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-semibold text-white text-left">Enter your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-2 bg-black-950 text-white block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold text-white text-left">Enter your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" bg-black-950 text-white mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  sm:text-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg  text-white text-left font-semibold">Enter your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="pb-2 pt-23 bg-black-950 text-white mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 sm:text-lg"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white py-3 px-6 rounded-md shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
        </div>
        </div>  
        </div>
        </div>
    );
};
export default contact