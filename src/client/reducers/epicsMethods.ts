import { PreloadedStateEpics } from 'common'

import MovieDetails from 'client/reducers/MovieDetails'
import SearchMovies from 'client/reducers/SearchMovies'

export const reducersMapObjects = {
	...MovieDetails.reducersMapObject,
	...SearchMovies.reducersMapObject,
}

export const preloadedStateEpics: PreloadedStateEpics = {
	...MovieDetails.preloadedStateEpic,
	...SearchMovies.preloadedStateEpic,
}
