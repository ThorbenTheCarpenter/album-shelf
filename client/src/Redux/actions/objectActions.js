import { FETCH_OBJECTS } from './types'

export const fetchObjects = () => dispatch => {
        
        fetch('http://localhost:3007/albums/')
            .then(res => res.json())
            .then(objects => 
                dispatch({
                    type: FETCH_OBJECTS,
                    payload: objects 
            })
        );
}

export const addObject =  objectPattern => dispatch => {
    
    fetch('http://localhost:3007/albums/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(objectPattern)
    }
    )}


export const deleteObject =  (id) => dispatch => {
    fetch('http://localhost:3007/albums/' + id, {
        method: 'DELETE'
})}   

export const editObject =  (id, objectPattern) => dispatch => {
    fetch('http://localhost:3007/albums/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json'
        },
        body: JSON.stringify(objectPattern)
    }
    )}       
