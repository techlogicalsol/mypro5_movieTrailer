import axios from "axios";
import React, { useEffect, useState } from "react";
import LatestTrailer from "./LatestTrailer";
import Banner from "./Banner";
import Movies from "./Movies";
import Trending from "./Trending";
import TV from "./TV";


function Home(){

const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState('')
const [latest, setLatest] = useState([])
const [trend, setTrend] = useState([])

// const [tv, setTV] = useState([])
const [page, setPage] = useState(1)
// const [numOfPages, setNumOfPages] = useState()



//const API = 'c4028c9a78ac705657966a3ce761f76c'
const API = `208b17a3c1eba97612ab74aee3ae4ce2`



const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`

const LatestTrailerURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API}&language=en-US&page=1`

const TrendURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${API}`





    const fetchMovies = async()=>{
        const response = await axios.get(baseURL)
        console.log(response.data)
        setMovies(response.data.results)
    }


    const fetchSearch = async ()=>{
        const response = await axios.get(
             `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`
         );
  
         setMovies(response.data.results);
         //setNumOfPages(response.data.total_pages)
     }

     const handleOnSubmit = (e) =>{
        e.preventDefault();

        if(searchTerm){
            fetchSearch(searchTerm)
            
            setSearchTerm('')
        }
    }
    
  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value)
  }


  /*---------------*/



    const fetchLatestTrailer = async()=>{
        const response = await axios.get(LatestTrailerURL)
      //  console.log("Trailer",response.data.title)
        setLatest(response.data.results)
        
    }

    const fetchTrend = async()=>{
        const response = await axios.get(TrendURL)
        //console.log("trend",response.data)
        setTrend(response.data.results)
    }






    useEffect(()=>{
        fetchMovies()
        fetchLatestTrailer()
        fetchTrend()
        fetchSearch()
      
    },[])

    return(
        <>
            <Banner 
                 handleOnChange={handleOnChange}
                 handleOnSubmit={handleOnSubmit}
                 searchTerm={searchTerm}
            
            />

       

            <Movies 
                movies={movies}
                setMovies={setMovies}
            
            />
            
            <div className='container mb-5'>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <h1>Latest Trailer</h1>
                        <div className="scrolling-wrapper1 mt-5 mb-5">
                            {latest && latest.map((item)=>
                                
                                    <LatestTrailer 
                        id={item.id}
                        title={item.title}
                />
                )}
                                </div>
                         
                        </div>
                
                </div>
      
            </div>

            <Trending 
                trend={trend}
                setTrend={setTrend}
            />

        
        </>
    )
}

export default Home