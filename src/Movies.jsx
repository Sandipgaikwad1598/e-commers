import React from "react";
import './Movies.css';
function Movies(props){
    return(
        <>
            <div className="Cards">
                <div className="card">
                    <div className="imgs">
                        <img src={props.image} alt='movies name'></img>
                    </div>
                    <div className="link">
                        <h5>The Original Nexflix Series</h5>
                        <h3>{props.title}</h3>
                        <a href={props.link} target={"_blank"}>
                        <button>WATCH NOW</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Movies;