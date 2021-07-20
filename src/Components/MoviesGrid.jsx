import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "../helpers/httpClient";
import movies from "../movies.json"
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from '../Components/Spinner';
import { useQuery } from "../hooks/useQuery";




export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    /* const [movies, setMovies] = movieState; */
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");
    console.log(search);
/* const location = useLocation();
console.log(location.search); */

    useEffect(()=>{
        setIsLoading(true);
        const searchUrl= search ? "/search/movie?query="+ search : "/discover/movie";
        getData(searchUrl).then(data =>{setMovies(data.results)});
        setIsLoading(false);
    },[search] );

    if (isLoading) {
        return <Spinner/>;
    }

    return (
        <ul className={styles.moviesGrid}>
          {movies.map((movie) => ( 
              <MovieCard key={movie.id} movie={movie}/>
          ))}
        </ul>
    )
}