import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Button from '@material-ui/core/Button';

import PlayArrow from "@material-ui/icons/PlayArrow";

function Popular({content, movies}){

    
console.log("movies,,,", content)
    return(
        <>
  
    {/* <ReactPlayer 
        url={`https://www.youtube.com/embed/${content.key}`}
        controls={true}
    /> */}

            <Button
            variant="contained"
            startIcon={<PlayArrow />}
            target="_blank"
            href={`https://www.youtube.com/watch?v=${content.key}`}
            
            >
            Play Trailer
            </Button>


        </>
   ) 
}

export default Popular