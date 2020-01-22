import * as Yup from "yup"

export const validationSchema =
    Yup.object().shape({
    artist: Yup.string()
        .required("Put the artist name"),
    title: Yup.string()
        .required("Enter your name, please!"),
    year: Yup.number()
        .min(4, "Enter full year")
    ,
    })

      
