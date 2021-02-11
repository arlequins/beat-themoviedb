import { combineEpics } from 'redux-observable'

// import epics
import { addAddFavoriteAddEpic, addCreateFavoriteAddEpic, addListFavoriteAddEpic, addRemoveFavoriteAddEpic } from 'client/epics/Favorite'
import { addMovieDetailsEpic } from 'client/epics/MovieDetails'
import { addSearchMoviesEpic } from 'client/epics/SearchMovies'

export default combineEpics(addMovieDetailsEpic, addSearchMoviesEpic, addAddFavoriteAddEpic, addCreateFavoriteAddEpic, addRemoveFavoriteAddEpic, addListFavoriteAddEpic)
