import { Link } from "react-router-dom";
import React from "react";
import Movies2 from "./movies2";
import './Movies.css';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';

function Movies(props){

    const handel =(e)=>{
        console.log(e.value)
    }

    return(
        <>
        {/* <Pagination> */}
        {/* <Pagination.Prev /> */}
        <div className="main">
            <div className="Cards">
                <div className="card">
                    <div className="imgs">
                        
                        <img  onClick={handel} src={props.image} alt='movies name'></img>
                    </div>
                </div>
            </div>

            </div> 
        </>
    )
}
export default Movies;