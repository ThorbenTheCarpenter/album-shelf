import React from 'react'

export default function SearchBox(props) {
    return(
        <input className='searchBar' placeholder="Search" onChange={props.handleInput} type='text' />
    )
}