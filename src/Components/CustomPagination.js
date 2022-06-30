import React from "react";
import Pagination from '@material-ui/lab/Pagination';
//npm install @material-ui/lab

function CustomPagination({setPage, numOfPages = 10}){

    const handlePageChange = (page) =>{
        setPage(page)
        window.scroll(0, 0)
    }

    return(
        <div style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "80px",
            marginBottom: "20px"
        }} >

            <Pagination 
                count={numOfPages}
                onChange={(e)=> handlePageChange(e.target.textContent)}
                color="secondary"

            />
        </div>
    )
}

export default CustomPagination