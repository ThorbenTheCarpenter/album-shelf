import React from 'react';
import { useHistory } from 'react-router-dom'
import useForm from './useFormEdit'
import validate from "./validation"

export default function EditObj() {

  const { handleChange, onSubmit, values, errors } = useForm(submit, validate)
  
    function submit() {}

  const history = useHistory()
  

    return(

      <div>
        <form noValidate onSubmit={onSubmit}>
        <br />
            
            <label>Artist: </label>
            <input className='textinput' type="text" name="artist" value={values.artist} onChange={handleChange}/>
            {errors.artist && <p>{errors.artist}</p>} 
         
          <br />
           
            <label>Title: </label>
            <input className='textinput' type="text" name="title" value={values.title} onChange={handleChange}/>
            {errors.title && <p>{errors.title}</p>} 
         
          <br />
            
            <label>Image: </label>
            <input className='textinput' type="select" name="image" value={values.image} onChange={handleChange}/>
         
          <br />
   
            <label>Description: </label>
            <textarea name="description" value={values.description} onChange={handleChange}/>
            {errors.description && <p>{errors.description}</p>} 

          <br />
            
   
            <label>Year: </label>
            <input className='textinput' name="year" type="text" value={values.quantity} onChange={handleChange}/>
            {errors.quantity && <p>{errors.quantity}</p>}
        
          <br />

          <button className='submitbutton' type='submit'> Submit! </button>

          <button className='submitbutton' onClick={(e) => history.push('/')}> Go back! </button>
        </form>

    </div>
    );
}

