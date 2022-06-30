import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cast({cast}){
    const img_300 = "https://image.tmdb.org/t/p/w300";
    const not_available = '/img/post.jpg'

   
      const settings = {

        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(


        
       

        <div className="main_grid mt-5">
        <h2>Cast</h2>
        <Slider {...settings}>
            {cast && cast.map((item)=>(
          <div className="main_cast">
            <img src={item.profile_path ? `${img_300 + item.profile_path}` 
    : not_available} className="cast" alt={item.title} />

            <div className='character'>
                {item.name}
            </div>

          </div>
          ))}
          
        </Slider>
      </div>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-md-10 mx-auto">

    //     <h1>What's Popular</h1>

    //     <Slider {...settings}>

         
    //           {cast && cast.map((item)=>(
    //             <div className="main_grid">
    //               <img src={item.profile_path ? `${img_300 + item.profile_path}` 
    //  : not_available} className="cast" alt={item.title} />
    //             </div>
    //           ))}
    
    //     </Slider>
    //     </div>
    //   </div>
    // </div>
    
    )
}

export default Cast