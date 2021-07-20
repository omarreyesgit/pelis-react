import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movie from './movie.json';
import styles from "./MovieDetails.module.css"
import {getData} from "../helpers/httpClient.js";
import { Spinner } from '../Components/Spinner';
import { useQuery } from '../hooks/useQuery';
export function MovieDetails () {
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[movie, setMovie]=useState(null);
   
    
    useEffect(() =>{
        setIsLoading(true);
        getData("/movie/" +movieId).then(data=> {
            setIsLoading(false)
            setMovie(data)
        })
    },[movieId]);

    if(isLoading){
        return <Spinner/>
    }

    if(!movie){return null};

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return(  <div className={styles.detailsContainer}>
    
    <img src={imageUrl} alt={movie.title} className={`${styles.col} ${styles.movieImage}`} />
    <div className={`${styles.col} ${styles.movieDetails}`}>
        <p><strong>Title: </strong>{movie.title}</p>
        <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Description: </strong>  {movie.overview}</p>
    </div>
    
    </div>
    )
}