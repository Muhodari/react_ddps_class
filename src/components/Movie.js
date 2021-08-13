import react,{Component} from 'react'
import API from '../API'
import { useParams } from 'react-router';
// config 
import { IMAGE_BASE_URL, POSTER_SIZE} from '../config';

// components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from './BreadCrumb';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
// image
import NoImage from '../images/no_image.jpg'

class Movie extends Component{

state = {
  movie:{},
  loading:true,
  error:false,
}

// fetch movie function
fetchMovie =async ()=>{
 const {movieId} = this.props.params;
 
  try{
    this.setState({error:false,loading:true})

    const movie = await API.fetchMovie(movieId);
    const credits= await API.fetchCredits(movieId);
    
    //   get directors only   
     const directors = credits.crew.filter(
         member => member.job === 'Director'
     );
  
     setState({
         ...movie,
         actors: credits.cast,
         directors
     })
     setLoading(false);
      }
      catch(error){
          setError(true)
      }
  
  };




render(){

  if(loading){
    return <Spinner/>;
  } 
  if(error) return <div>something went wrong...</div>;


return(
    <>
    <BreadCrumb movieTitle={movie.original_title} />
    <MovieInfo movie={movie} />
    <MovieInfoBar 
    time={movie.runtime} 
    budget={movie.budget} 
    revenue ={movie.revenue}  
    />

    <Grid header='Actors'>

{movie.actors.map(actor =>( 
  <Actor 
    key={actor.credit_id}
    name={actor.name}
    character ={actor.character}
    imageUrl={
      actor.profile_path
      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
      :NoImage
 }
 />

     ))}

    </Grid>

    
    </>
)

}
  

};

const MovieWithParams = props => <Movie {...props} params={useParams()} />

export default MovieWithParams;