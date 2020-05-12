import React from 'react';

const SearchBox =({searchchange}) =>{
    return(
        <div className='pa2' >
            <input 
                className = 'pa3 ba b--green bg-lightest-blue'
                type="search" 
                placeholder="search robots" 
                onChange={searchchange} //onChange is a builtin property // searchchange is a function
            />
        </div>
    );
}

export default SearchBox;