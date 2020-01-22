import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, Redirect, useParams } from "react-router-dom";
import { editObject } from '../../Redux/actions/objectActions'


const useForm = (callback, validate) => {
     
  const [values, setValues] = useState('')  
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3007/albums/'+ UserId,
      );
      setValues(result.data);
    };
    fetchData();
  }, []);
  
  const UserId = parseInt(useParams().id)

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});


  const dispatch = useDispatch() 
  const history = useHistory()

 
// Handle Change

const handleChange = e => {
    const {name, value} = e.target
    setValues({
       ...values,
       [name] : value
     })
   }

// Submitting

const objectPattern = {
  artist: values.artist,
  title: values.title,
  description: values.description,
  image: values.image,
  year: values.year
};    

const onSubmit = (e) => {
      e.preventDefault();    
      setErrors(validate(values));
      dispatch(editObject(UserId, objectPattern));   
      setIsSubmitting(true)
      callback();
    return <Redirect to='/' />
    };

    useEffect(() => {
      if (Object.keys(errors).length < 1 && isSubmitting === true) {
       history.push('/')
        callback();
      }
    }, [errors]);

// Return


return {
        handleChange,
        onSubmit,
        values,
        errors
      };
};

export default useForm;