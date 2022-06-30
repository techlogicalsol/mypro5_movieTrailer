import React from "react";
import { Link } from "react-router-dom";

function Movies({movies, setMovies}){

    const img_300 = "https://image.tmdb.org/t/p/w300";
    const not_available = '/img/post.jpg'

    const setVoteClass = (vote) =>{
      if(vote >= 8){
        return 'green'
      
      }else if(vote >= 6){
        return 'orange'
      
      }else{
        return 'red'
      }
    }
        
    return(

<div className="container mt-5">
  <div className="row">
    <div className="col-md-10 mx-auto">
      <h1>What's Popular</h1>
    <div className="scrolling-wrapper mt-5 mb-5">
  {movies && movies.map((item)=>(
  <div className="card" key={item.id}>
    <Link to={`popdetail/${item.id}`}>
    <img src={item.poster_path ? `${img_300 + item.poster_path}` 
    : not_available} className="moviesImg" alt={item.title} />

    </Link>

    <div className="title">
      {item.title || item.name}
    </div>
    <div className="release_date">
      {item.release_date || item.first_air_date}
    </div>

    <div className={`tag ${setVoteClass(item.vote_average)}`}>
      {item.vote_average}
      
      <span className="percentage"><sup>%</sup></span>
    </div>
    
  </div>
  

  ))}
  
</div>

    </div>

    
  </div>
</div>




      
  );
}

       


export default Movies