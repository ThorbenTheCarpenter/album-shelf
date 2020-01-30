import * as Yup from "yup"

export const validationSchema =
    Yup.object().shape({
    artist: Yup.string()
        .required("Put the artist name"),
    title: Yup.string()
        .required("Enter the album's title"),
    year: Yup.number()
        .min(4, "Enter full year")
    ,
    })

      
