import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cast from "./Cast";
import Popular from "./Popular";

function PopDetail(){

    const img_300 = "https://image.tmdb.org/t/p/w1280";
    const not_available = '/img/post.jpg'
    const API = `208b17a3c1eba97612ab74aee3ae4ce2`

    const {id} = useParams()
    const [content, setContent] = useState()
    const [movies, setMovies] = useState([])
    const [cast, setCast] = useState([])
    // const [favorite, setFavorite] = useState([])


    const setVoteClass = (vote) =>{
        if(vote >= 8){
          return 'green'
        
        }else if(vote >= 6){
          return 'orange'
        
        }else{
          return 'red'
        }
      }

   const baseURLPopDetail = `
    https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API}&language=en-US`

    const popularDetail = async()=>{
        const response = await axios.get(baseURLPopDetail)
        //console.log(response)
        
       setContent(response.data.results[0])

    }

    const baseURL = `https://api.themoviedb.org/3/movie/${id}popular?api_key=${API}&language=en-US&page=1`

    const fetchMovies = async()=>{
        const response = await axios.get(baseURL)
        //console.log(response)
        setMovies([response.data])
    }

    
    const baseURLCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API}&language=en-US`

    const fetchCast = async()=>{
        const response = await axios.get(baseURLCast)
        console.log("cast",response)
        setCast(response.data.cast)
    }

    useEffect(()=>{
         
        fetchMovies()
        popularDetail()
        fetchCast()
    },[])

    // const saveToLocalStorage = (item)=>{
    //     localStorage.setItem('mypro5', JSON.stringify(item))
    // }


    // useEffect(()=>{
    //     const movieFavorites = JSON.parse(localStorage.getItem('mypro5'))
    //     setFavorite(movieFavorites)
    // },[])

    // const AddFav = (movies)=>{
    //     const newList = [...favorite, movies]
    //     setFavorite(newList)
    //     saveToLocalStorage(newList)
    // }


    return(
        <div className="container mt-5">
        <div className="row">
            <div className="col-md-12">

          
{movies && movies.map((item)=>(            
<div className="hero">       
<img src={item.backdrop_path ? `${img_300 + item.backdrop_path}` 
    : not_available} className="fullImg" alt={item.title} />
    <div className="hero-content">

        <div className="column_one">
            <div className="posterImg">
    <img src={item.poster_path ? `${img_300 + item.poster_path}` 
    : not_available} className="poster" alt={item.title} />
            </div>
        </div>

        <div className="column_two">
            <div className="movie_info">
               <div className="title_info">
                   {item.title || item.name}
                   <span> ({item.release_date})</span>
               </div>

               <div className="categories">
                   {item.genres[0].name ? item.genres[0].name : ""}
                  
                  
                   &bull; {item.runtime}m
               </div>

            <div className="iconlist">

            <div className={`tag1 ${setVoteClass(item.vote_average)}`}>
                {item.vote_average}     
            <span className="percentage1"><sup>%</sup></span>
            
            </div>

           
            <div className="fav">
                <i class="fas fa-list"></i>   
            </div>

            <div className="remove">
            <i class="fas fa-backspace"></i>
            </div>

            <div>
            {content ? (
                    <Popular 
                    content={content}
                   
                    
                    />
                ):(
                    <> loading </>
                )} 
            
            </div>

            </div>

               <div className="tagline">
                   {item.tagline}
               </div>

               <div className="overview">
                   <div className="heading">Overview</div>
                   <span>{item.overview}</span>
               </div>

               <div className='studio'>
                   {item.production_companies[0].name ? item.production_companies[0].name : "N/A"}
                   <div>Production Company</div>
               </div>
               
            </div>
        </div>
    </div>

</div>
))}
   </div>

   <Cast 
    cast={cast}
    setCast={setCast}
/>
</div>                           
</div>
    )
}

export default PopDetail

