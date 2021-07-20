import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css"


export function MovieCard(props) {
    console.log(styles);
    const imageUrl ="https://image.tmdb.org/t/p/w300" + props.movie.poster_path;
    return <li className={styles.movieCard}>
    <Link to={"/movies/" + props.movie.id}>
    <img 
    src={imageUrl} 
    alt={props.movie.title} 
    className={styles.moviImage}
     width={230}
     height={345}   
    />
   <div className={styles.movieTitle}>
   {props.movie.title}
   </div> 
   </Link>
    </li>
}