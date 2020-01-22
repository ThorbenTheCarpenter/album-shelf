export default function validate(values) {
    let errors = {};

// Artist validation
    
   if (values.artist.length < 0) {
        errors.artist = "Cannot be empty"
    }
    

// Title validation
    
    if (values.title.length < 0) {
         errors.title = "Cannot be empty"
     }
  
  
// Year validation

    if (values.year.length != 4) {
    errors.year = "Enter the year of release"
    }
    else if (!/[0-9]/.test(values.quantity)) {
        errors.quantity = "Must be a number" 
    }


    return errors;
}