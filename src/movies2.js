import React from "react";
import './Movies.css';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';

function Movies2(props){
    return(
        <>
        {/* <Pagination> */}
        {/* <Pagination.Prev /> */}
        <div className="main">
            <div className="Cards">
                <div className="card">
                    <div className="imgs">
                        <img src={props.image} alt='movies name'></img>
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </div>

            </div> 
            {/* <Pagination.Next />  */}
            {/* </Pagination>   */}
        </>
    )
}
export default Movies2;