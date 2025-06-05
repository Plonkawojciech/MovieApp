import '../css/Favourites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favourite() {
  const {favourites} = useMovieContext()

  if(favourites){
    return <div className='favourites'>
        <p className='section-heading'> Your favourites</p>
      <div className="movie-grid">
          {favourites.map(movie => ( 
            <MovieCard movie={movie} key={movie.id}/>
          ))}
      </div>
    </div>
    
  }

  return (
    <div className="favourite-empty">
      <h2>No Favourite movies yet</h2>
      <p>Start adding movies to your fourites and they will appear here</p>
    </div>
  )
}

export default Favourite