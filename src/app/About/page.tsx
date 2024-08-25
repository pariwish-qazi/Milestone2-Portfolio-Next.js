import Link from "next/link";
import React from "react";

function About () {
    return (
      <div className="px-6 py-16 md:px-8 lg:px-16 mt-12 md:mt-34 lg:mt-24 bg-pink-200">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white-950 text-left border-l-8 pl-4 border-blue-800 mb-8 md:mb-12">
            About Me:
          </h1>
        
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 opacity-60">
            <div className="bg-pink-600 bg-gradient-to-r from-black-700 via-black-800 to-black-900 p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg flex flex-col justify-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="md:text-left text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-400 mb-4">
                About:
              </h2>
              <p className="text-left text-base md:text-lg lg:text-xl font-semibold text-white leading-relaxed">
                I'm Bisma Qazi, I am currently enrolled in the prestigious Governor's Initiative of Artificial Intelligence and Computing (GIAIC), where I am augmenting my expertise in cutting-edge web development and AI technologies as a Senior Student <br />
          My Courese includes with advanced TypeScript training, Next.js, and Tailwind CSS. I've also developed several CLI projects using TypeScript, expanding my expertise in modern technologies."
              </p>
            </div>
            <div className="bg-pink-600 bg-gradient-to-r from-black-700 via-black-800 to-black-900 p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg flex flex-col justify-center transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-yellow-400 mb-4">
                Skills:
              </h2>
              <ul className="list-disc pl-4 text-base md:text-lg lg:text-xl text-white font-semibold">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            
            </div>
        </div>

        <div className="bg-pink-200 py-12 px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div>
        <h1 className="md:ml-9  text-4xl md:text-5xl lg:text-6xl font-extrabold text-black-950 text-left border-l-8 pl-4 border-blue-800 mb-8 md:mb-12 mt-28">
          My Projects:
        </h1></div>
          <p className="text-2xl md:text-3xl font-extrabold text-white-950 mb-6">
            Here are some of my TypeScript and Node.js CLI-based projects I've worked on!
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <div className="bg-pink-600 bg-black-800 bg-opacity-80 shadow-md rounded-lg p-6 w-full max-w-sm text-center text-gray-900 font-semibold transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-80">
            <h3 className="text-xl font-extrabold mb-2">ATM Project</h3>
            <p className="mb-4 text-blue-950 font-semibold">A CLI-based application to manage bank operations like credits and debits!</p>
            <a
              href="https://github.com/pariwish-qazi/ATM_Project"
              target="_blank"
              className="text-white bg-blue-950 rounded-lg px-4 py-2 font-semibold hover:bg-cyan-800"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-pink-600 bg-black-800 bg-opacity-80 shadow-md rounded-lg p-6 w-full max-w-sm text-center text-gray-900 font-semibold transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-80">
            <h3 className="text-xl font-extrabold mb-2">Word & Letter Counter</h3>
            <p className="mb-4 text-blue-950">A software tool designed to count words and letters</p>
            <a
              href="https://github.com/pariwish-qazi/Word-Letter-Counter-Game"
              target="_blank"
              className="text-white bg-blue-950 rounded-lg px-4 py-2 font-semibold hover:bg-cyan-800"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-pink-600 bg-black-800 bg-opacity-80 shadow-md rounded-lg p-6 w-full max-w-sm text-center text-gray-900 font-semibold transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-80">
            <h3 className="text-xl font-extrabold mb-2">Student Management System</h3>
            <p className="mb-4 text-blue-950">Build a system to track student enrollments, registration, course progress, and statuses across various courses!</p>
            <a
              href="https://github.com/pariwish-qazi/Student_Management_System"
              target="_blank"
              className="text-white bg-blue-950 rounded-lg px-4 py-2 font-semibold hover:bg-cyan-800"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-pink-600 bg-black-800 bg-opacity-80 shadow-md rounded-lg p-6 w-full max-w-sm text-center text-gray-900 font-semibold transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-80">
            <h3 className="text-xl font-extrabold mb-2">Adventure Game</h3>
            <p className="mb-4 text-blue-950">A CLI-based adventure game using Node.js and TypeScript. Players collect valuable items and overcome challenges!</p>
            <a
              href="https://github.com/pariwish-qazi/Adventure_game"
              target="_blank"
              className="text-white bg-blue-950 rounded-lg px-4 py-2 font-semibold hover:bg-cyan-800"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-pink-600 bg-black-800 bg-opacity-80 shadow-md rounded-lg p-6 w-full max-w-sm text-center text-gray-900 font-semibold transition-transform hover:scale-105 hover:shadow-2xl flex flex-col justify-between h-80">
            <h3 className="text-xl font-extrabold mb-2">Currency Converter</h3>
            <p className="mb-4 text-blue-950">A CLI-based application that converts amounts from one currency to another based on current exchange rates!</p>
            <a
              href="https://github.com/pariwish-qazi/Currency_Convertor_typescript"
              target="_blank"
              className="text-white bg-blue-950 rounded-lg px-4 py-2 font-semibold hover:bg-cyan-800"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
      </div>
    );
    };
  
export default About