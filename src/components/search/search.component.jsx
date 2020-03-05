import React from 'react';
import './search.styles.css'

const Search = (props) => (
    <div className="search-container" >
        <input type ="text" className= "search" placeholder= "search" onChange= {event =>props.handleSearch(event)}/>

    </div>
)
export default Search;