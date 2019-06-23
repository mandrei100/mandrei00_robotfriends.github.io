import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className='pa2'>
        <input 
            className='w-20 pa3 tc ba5 b--green bg-lightest-blue'
            type='search' 
            placeholder='search robot' 
            onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;