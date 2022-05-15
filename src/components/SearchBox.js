import React from "react";

const SearchBox = ({searchfield, Search}) => {
    return(
        <div className="pa2">
            <input 
                className="pa3 ba b--green bg-ligthest-blue"
                type='search' 
                placeholder="search for members" 
                onChange={Search}
            />
        </div>
    );
}

export default SearchBox  