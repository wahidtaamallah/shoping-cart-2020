import React from 'react'
import "./Search.css"

function Searchtitle({setSearchtitle}) {
    return (
        <div>
        <div className='search-container'> 
           <input  type='text'
          placeholder='Type teamName to search'
          onChange={(e)=>setSearchtitle(e.target.value)}/> 

        </div>
        </div>
    )
}

export default Searchtitle;