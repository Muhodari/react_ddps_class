import React,{Component} from 'react';
//  API
import API from '../API'
// config
import { POSTER_SIZE,BACKDROP_SIZE,IMAGE_BASE_URL } from "../config";
// components
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearcBar from './SearchBar';
import Button from './Buttons';



// Image
import NoImage from '../images/no_image.jpg'


const initialState ={
    page:0,
    results:[],
    total_pages:0,
    total_results:0,
};


class Home extends Component {

state = {
    movies:initialState,
    searchTerm:'',
    isLoadingMore:false,
    loading:false,
    error:false,
}

 fetchMovies = async(page,searchTerm="")=>{
    try{
        this.setState({error:false, loading:true});

   const movies = await API.fetchMovies(searchTerm,page) 

   this.setState(prev=>({
      ...prev,

      movies:{
        ...movies,
        results:
        page>1? [...prev.movies.results,...movies.results] : [...movies.results]
      },
      loading:false,
   }))
    }
    catch(error){
      this.setState({error:true,loading:false})         
}
};


handleSearch = searchTerm =>
    this.setState({movies:initialState,searchTerm}, ()=>
    this.fetchMovies(1,this.state.searchTerm)
    )

 handleLoadingMore = () =>
    this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);
  

componentDidMount(){
    this.fetchMovies(1);
}

render(){
    const {searchTerm,movies,loading,error} = this.state;

    if(error) return <div>something went wrong...</div>

    return (
    <>
    {!searchTerm && movies.results[0]? (
        <HeroImage 
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
        title={movies.results[0].original_title}
    
        text ={movies.results[0].overview}
    
        
        /> 
    ):null}
    
    
     {/* search bar */}
     <SearcBar setSearchTerm={this.handleSearch}
     />
    
    <Grid header={searchTerm ? 'Search Results':'Popular movies'}>
        {movies.results.map( movie => (
       <Thumb  
       key={movie.id}
       clickable
       image={
           movie.poster_path 
           ? IMAGE_BASE_URL +POSTER_SIZE +movie.poster_path
           :NoImage
       }
        movieId={movie.id}
        />
    
    
    
    
        ))}
    
    </Grid>
    {loading && <Spinner/> }
    
    {movies.page < movies.total_pages && !loading && (
        <Button text='Load More' callback={this.handleLoadingMore} />
    )}
    </>
    )
}
}

export default Home;