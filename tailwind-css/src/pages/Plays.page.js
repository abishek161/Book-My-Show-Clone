

import axios from "axios";

import React , {useState, useEffect} from "react";

import Poster from "../components/Poster/poster.component";
import PlaysFilters from "../components/PlaysFilters/PlaysFilters.component"

const Plays = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
       const requestPopularMovies = async () => {
         const getPopularMovies = await axios.get("/movie/popular");
         setPopularMovies(getPopularMovies.data.results);
       };
       requestPopularMovies();
     },[]);




return(
<>
<div className="cointainer mx-auto px-4">
   <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="lg:w-8/12">
         <h2 className="text-2xl font-bold mb-4">Plays in Chennai</h2>
         <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                images={popularMovies} />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                   />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                   />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                   />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                   />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                 />
            </div>
            <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
               <Poster
                   />
                  </div>
                  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
                     <Poster

                       />
                  </div>
         </div>
      </div>
      <div className="lg:w-1/4">
<h2 className="text-2xl font-bold mb-4">Filters</h2>
<div className=" space-y-2 ">
<PlaysFilters  title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
<PlaysFilters  title="Language" tags={["Tamil", "Kannada"]}/>
<PlaysFilters  title="Categories" tags={["Theatre"]}/>
<PlaysFilters  title="Genres" tags={["Drama", "Comedy", "Action"]}/>
<PlaysFilters  title="More Filters" tags={["Online Streaming", "Outdoor Events"]}/>
<PlaysFilters  title="Price" tags={["Free", "0-500", "501-2000","Above 2000"]}/>
<div className=" border-2 border-pink-500 rounded-lg  grid justify-items-center  ">
<span className="text-pink-500   ">Browse by Venues </span>
</div>
</div>
      </div>
   </div>
</div>
</>
)
}
export default Plays;
