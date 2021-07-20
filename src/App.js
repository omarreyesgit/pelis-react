import './App.css';
import { MoviesGrid } from './Components/MoviesGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';

function App() {
  return (
    <Router className="App">
      <header className="App-header">
      <Link to="/">
      <h1>Movies</h1>
      </Link>
       
      </header>
      <main>
        {/* <MoviesGrid/> */}
        <Switch>
          <Route path="/movies/:movieId">
           <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
          
        </Switch>
      </main>
    </Router>
  );
}

export default App;
