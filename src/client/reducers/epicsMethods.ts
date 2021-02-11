import { PreloadedStateEpics } from 'common'

import AppConfig from 'client/reducers/AppConfig'
import Favorite from 'client/reducers/Favorite'
import MovieDetails from 'client/reducers/MovieDetails'
import SearchMovies from 'client/reducers/SearchMovies'

export const reducersMapObjects = {
	...MovieDetails.reducersMapObject,
	...SearchMovies.reducersMapObject,
	...Favorite.reducersMapObject,
	...AppConfig.reducersMapObject,
}

export const preloadedStateEpics: PreloadedStateEpics = {
	...MovieDetails.preloadedStateEpic,
	...SearchMovies.preloadedStateEpic,
	...Favorite.preloadedStateEpic,
	...AppConfig.preloadedStateEpic,
}
