import { combineEpics } from 'redux-observable'

// import epics
import { addMovieDetailsEpic } from 'client/epics/MovieDetails'
import { addSearchMoviesEpic } from 'client/epics/SearchMovies'

export default combineEpics(addMovieDetailsEpic, addSearchMoviesEpic)
