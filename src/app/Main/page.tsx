import React from "react";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
      <>
        <Navbar />

<div className="text-center bg-pink-200 bg-cover bg-fixed px-6 md:px-12 lg:px-24 py-20 lg:py-40">
        <h1 className="mt-60 md:text-top text-3xl md:text-4xl lg:text-6xl font-extrabold text-white-950 py-4 md:py-7 md:mt-16">
          Hey there! I'm Bisma Qazi. A Passionate Web Developer! 🚀
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl px-4 md:px-8 lg:px-16 text-cyan-950 font-bold mb-12 md:mb-16">
        Welcome to my portfolio! A dynamic and creative teenage female with a zest for graphic designing, video editing and now becoming Generative AI Engineer. With a strong proficiency in TypeScript, HTML, CSS, and Next.js.
        </p>

        <div className="px-4 md:px-8 lg:px-16 mt-12 md:mt-24 lg:mt-36">
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
     </div>
 </div>
 </>
  );
};

export default Main;

