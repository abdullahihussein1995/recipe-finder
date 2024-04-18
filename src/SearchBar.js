import React from "react";
import { useState } from "react";


function SearchBar({ query, onInputChange, onSearch }) {
    return (
        <div className="search-bar">
            <input type="text" value={query} onChange={onInputChange} placeholder="Search for recipes..." />
            <button onClick={onSearch}>Search</button>
        </div>
    )
    
}


export default SearchBar;