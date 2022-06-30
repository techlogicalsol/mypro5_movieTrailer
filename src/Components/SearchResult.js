import React from "react";

function SearchResult(){


    const [searchTerm, setSearchTerm] = useState('')

    const img_300 = "https://image.tmdb.org/t/p/w1280";
    const not_available = '/img/post.jpg'
    const API = `208b17a3c1eba97612ab74aee3ae4ce2`

    const TVURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API}&language=en-US&page=${page}`

    const search_API = `https://api.themoviedb.org/3/search/tv?&api_key=c4028c9a78ac705657966a3ce761f76c&query=`



    return(
        <>
            search

        </>
    )
}

export default SearchResult