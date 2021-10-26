import React from "react";

import PlaysNavbar from "../components/Navbar/PlaysNavbar.component";

import HeroCarousal from "../components/HeroCarousal/HeroCarousal.component";

const PlaysLayout = (props) => {
  return(
    <>
    <PlaysNavbar/>
    <HeroCarousal/>
   {props.children}
    </>
);
};

export default PlaysLayout;
