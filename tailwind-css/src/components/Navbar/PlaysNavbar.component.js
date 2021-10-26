import React from "react";
import { BiChevronRight ,BiSearch ,BiChevronDown, BiMenu } from "react-icons/bi"
const NavSm = () => {
return(
<>
<div className ="text-white flex items-center justify-between">
   <div>
      <h3 className = "text-xl font-bold">It All Starts Here! </h3>
      <span className = "text-gray-400 text-xs flex items-center">
         Chennai
         <BiChevronRight />
      </span>
   </div>
   <div className = "w-8 h-8">
      <BiSearch className="w-full h-full"/>
   </div>
</div>
</>
)
};
const NavMd = () => {
return(
<div className="w-full flex iems-center bg-white gap-3 px-3 py-2 rounded-sm ">
   <BiSearch />
   <input type= "search" className ="w-full focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
</div>
);
};
const NavLg = () => {
return(
<>
<div className="container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-1/2">
      <div className="w-12 h-12 pr-2">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRX3ClAbdwCf5v3hqGI1MJpoq_KKHUGPlYLszl5HQRI_8rOWGB&s" alt="logo" className="w-full h-full"/>
      </div>
      <div className="w-full flex iems-center bg-white gap-3 px-3 py-2 rounded-sm ">
         <BiSearch />
         <input type= "search" className ="w-full focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
      </div>
   </div>


  <div className="flex iems-center gap-3">
      <span className = "text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
         Chennai
         <BiChevronDown />
      </span>
      <button className="bg-red-600 text-white text-sm rounded px-2 py-1">
      Sign in
      </button>
      <div className="w-8 h-8 text-white">
         <BiMenu className="w-full h-full" />
      </div>
   </div>
   </div>
   </>
   )
   };
const PlaysNavbar = () => {
return(
<>
<nav className = 'bg-navCol-800 px-4 py-2'>
   <div className="md:hidden">
      {/*mobile screen*/
      <NavSm />
      }
   </div>
   <div className="hidden lg:hidden md:flex">
      {/*tablet screen*/}
      <NavMd />
   </div>
   <div className="hidden lg:flex">
      {/*large screen*/}
      <NavLg />
   </div>
</nav>
</>
);
};
export default PlaysNavbar;
