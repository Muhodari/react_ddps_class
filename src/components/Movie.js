import react from 'react'
// config 
import { IMAGE_BASE_URL, POSTER_SIZE} from '../config';

// components
import Grid from './Grid';
import Spinner from './Spinner';
// hook
import { useMovieFetch } from './hooks/useMovieFetch';
// image
import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const {state: movie,loading,error} = useMovieFetch(movieId)

return(
    <>
    <div>Movie</div>
    </>
)

};

export default Movie