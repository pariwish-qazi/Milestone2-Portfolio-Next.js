import Link from "next/link";
import React from "react";
import Image from "next/image";


function Navbar()  {
  return (
    
      <div className="flex justify-between items-center md:5 px-8 py-3/2 w-full bg-opacity-90 text-blue-800 shadow absolute">
      <div className="text-blue-950">Bisma Qazi Portfolio<Image src="/mypic1.png" alt={"logo"}  width={100} height={100}></Image></div>

        <div>
          <ul className="hidden md:flex space-x-12 text-3xl font-bold font-sans ">
            <li className="hover:text-white-500  duration-700">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-white-500 duration-700">
              <Link href={"/About"}>About</Link>
            </li>
            <li className="hover:text-white-500 duration-700">
              <Link href={"/contact"}>Contact</Link>
            </li> 
          </ul>
        </div>
      </div>
    
  );
};

export default Navbar;