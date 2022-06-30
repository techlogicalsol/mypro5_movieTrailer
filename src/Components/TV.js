import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import CustomPagination from "./CustomPagination";

function TV(){

    const img_300 = "https://image.tmdb.org/t/p/w1280";
    const not_available = '/img/post.jpg'
    const [tv, setTV] = useState([])
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    const [numOfPages, setNumOfPages] = useState()

    const API = `208b17a3c1eba97612ab74aee3ae4ce2`

    const TVURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API}&language=en-US&page=${page}`

   
    
    const fetchTV = async()=>{
        const response = await axios.get(TVURL)
        console.log(response)
        setTV(response.data.results)
        setNumOfPages(response.data.total_pages)
    }

    const fetchSearch = async ()=>{
      const response = await axios.get(
           `https://api.themoviedb.org/3/search/tv?api_key=${API}&language=en-US&query=${searchTerm}&page=${page}&include_adult=false`
       );

       setTV(response.data.results);
       setNumOfPages(response.data.total_pages)
   }

    useEffect(()=>{
    
      fetchTV()
      fetchSearch()
  },[page])

 

    const setVoteClass = (vote) =>{
        if(vote >= 8){
          return 'green'
        
        }else if(vote >= 6){
          return 'orange'
        
        }else{
          return 'red'
        }
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


    return(


<>

<Banner 
     handleOnChange={handleOnChange}
     handleOnSubmit={handleOnSubmit}
     searchTerm={searchTerm}
            

/>

<div className="container mt-5">
    <h1 className="mb-3">TV Shows</h1>
        <div className="grid_container">
                
            {tv && tv.map((item)=>(
                <div className="col_Img">
                    <img src={item.poster_path ? `${img_300 + item.poster_path}` 
                    : not_available} className="tvImg" alt={item.title} />


<div className="title">
      {item.title || item.name}
    </div>
    <div className="release_date">
      {item.release_date || item.first_air_date}
    </div>

    <div className={`tag2 ${setVoteClass(item.vote_average)}`}>
      {item.vote_average}
      
      <span className="percentage"><sup>%</sup></span>
    </div>
                    </div>
                ))}
            </div>
            
           {numOfPages > 1 && (
            <CustomPagination 
                setPage={setPage}
                numOfPages={numOfPages}
            />
            )}
        </div>

        </>
        
    )
}

export default TV