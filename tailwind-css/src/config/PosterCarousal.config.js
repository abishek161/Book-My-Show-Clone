import React from "react";


import {NextArrow,PrevArrow} from "../components/HeroCarousal/Arrows.component";


const settings = {

  autoplay:false,
  infinite: true,
  InitialSlide: 0,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow:<NextArrow/>,
  prevArrow:<PrevArrow/>,


  responsive: [{
   breakpoint:1024,
    settings :{  slidesToShow: 3,
    slidesToScroll: 3, }
  },

  {
    breakpoint:600,
   settings :{  slidesToShow: 2,
   slidesToScroll: 2, }
 },

 {
   breakpoint:400,
  settings :{  slidesToShow: 1,
  slidesToScroll: 1, }
},

]
};

export default settings;
