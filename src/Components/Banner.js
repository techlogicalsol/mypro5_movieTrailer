import React from "react";

function Banner({handleOnSubmit, handleOnChange, searchTerm}){

    // const refresh = ()=>{
    //     window.location.reload()
    // }


    return(
        <>
    <div className="banner">    
        <div className="text-block">
            <h1>Movies Box</h1>
            <div className="main_title">        
                <p>
                    Millions of movies, TV shows and 
                    people to discover. Explore now.
                </p>
            </div>           
            </div>

            
            
        <div className="searchBox">
            <form onSubmit={handleOnSubmit}>
                <div className="formStyle">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search free high-resolution movies"
                        value={searchTerm}
                        onChange={handleOnChange}
                        required
                    />
                    <button className="btn-grad" 
                    type="submit">
                        Search
                    </button>

                  
                </div>
            </form>
        </div>
   
        <div className="companyInfo">
            <div>Developed by Amar Shabbir</div>
            <p>Powered by TechLogex Solutions</p> 
        </div>
                
                    
            </div>

        </>
    )
}

export default Banner