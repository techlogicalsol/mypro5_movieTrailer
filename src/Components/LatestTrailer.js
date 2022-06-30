import axios from "axios";
import React, { useEffect, useState } from "react";

function LatestTrailer({id, title}){

    const [movies, setMovies] = useState([])

    const img_300 = "https://image.tmdb.org/t/p/w1280";
    const not_available = '/img/post.jpg'
    const API = `208b17a3c1eba97612ab74aee3ae4ce2`

    const baseURL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API}&language=en-US`

    const fetchMovies = async()=>{
        const response = await axios.get(baseURL)
        //console.log(response)
        setMovies(response.data.results[0])
    }

    useEffect(()=>{
         
        fetchMovies()
    
    },[])



    return(
             
    <div className="card1">
       
        <iframe
            src={`https://www.youtube.com/embed/${movies.key}/controls=1`}
        >
        </iframe>
        <div className="title">
        {title}
    </div>
    </div>




        
    )
}

export default LatestTrailer