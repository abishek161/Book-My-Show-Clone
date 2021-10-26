import React from "react";

import {BiHeart} from "react-icons/bi";

const MovieHero =() =>{
  return(
    <>
<div className="md:hidden">
<img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
alt="Poster"
/>
</div>

<div className="hidden md:block lg:hidden">
<img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
alt="Poster"
/></div>


<div className="relative hidden lg:block h-1/2 " style ={{height:"40rem"}}>


<div className=" absolute h-full w-full z-10 "
style={{backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}
/>


<div className="absolute z-30 w-64 h-96 left-64 top-10  ">

<img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
alt="Poster"
className="h-full w-full rounded-xl " />

<div className="gap-4">

<div className="text-bold text-white text-3xl">Shang-Chi and the Legend of the Ten Rings</div>
<div  className="text-bold text-white pt-2">
<BiHeart/> 90%
56.1K ratings </div>


</div>



</div>



<img src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
alt="Poster" className="w-full h-full"
/>
</div>
    </>
  )
}

export default MovieHero;
