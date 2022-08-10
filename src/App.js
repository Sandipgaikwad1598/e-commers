import React from "react";
import Movies from "./Movies";
function App(){
    return( 
        <>
        <div className="header">
        <h1>Available Products</h1>
        </div>
        <form>
                <select>
                <option>Electronic</option>
                <option>Computer</option>
                </select>
            </form>
        </>
    )
}
export default App;