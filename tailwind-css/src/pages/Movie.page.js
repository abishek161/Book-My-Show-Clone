import React from "react";
import MovieHero from  "../components/MovieHero/MovieHero.component";
import {RiMovieLine} from "react-icons/ri";

const launchRazorpay = () => {
let options = {
  key: "rzp_test_aXyPpZinrDLM2N",
  amount: 500*100,
  currency : "INR",
  name:"Book My Show Clone",
  description : 'purchase movies on rental',
  image:"",
  handler:() => {
    alert("payment succesfull")
  },
  theme:{color:"#c4242d"}
};
let rzp = new window.Razorpay(options);
rzp.open();
};




const Movie = () =>{
return(
<>
<MovieHero/>
<div className="my-12 container px-4 lg:w-1/2 lg:ml-64">
   <div className="flex flex-col iems-start gap-3">
      <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
      <p> Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.</p>
   </div>
   <div className="my-8">
      <hr/>
   </div>
   <div className="flex flex-col iems-start gap-3">
      <h1 className="text-gray-800 font-bold text-2xl">Applicable offers</h1>
      <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
         <div className="w-8 h-8 ">
            <RiMovieLine  className="h-full w-full"/>
         </div>
         <div className="flex flex-col items-start">
            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
            <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
         </div>
      </div>
   </div>
   <button onClick={launchRazorpay} class=" mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded">
     Book Tickets
   </button>

</div>
</>
)
};
export default Movie;
