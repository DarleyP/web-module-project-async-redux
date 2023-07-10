import React from "react";

const Gif = (props) => {
    const {gif} = props;
     
    return (
        <div className="gif">
            <h3>{gif.title}</h3> 
           <p>{gif.username}</p>
           <img width='145' src={gif.images.original.url}/>
           <p>Rating: <strong>{gif.rating}</strong></p>
           <a target="_blank" href={gif.url}><button>ChecK it out on giffy</button></a> 
        </div>
    )
 }


 export default Gif;