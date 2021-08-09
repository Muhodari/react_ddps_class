import { useState,useEffect } from "react";
import API from '../../API'

export const useMovieFetch =movieId =>{

    const[state,setState] = useState({});
    const[loading,setLoading] = useState(true)
    const[error , setError]= useState(false)
    

}