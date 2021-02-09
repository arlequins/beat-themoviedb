import { AxiosError } from 'axios'
import { Action } from 'common'
import { ReqSearchMoviesPayload, SearchMovies } from 'response'

export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST'
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS'
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE'

export interface SearchMoviesRequestAction extends Action<typeof SEARCH_MOVIES_REQUEST> {
	payload: ReqSearchMoviesPayload
}
export interface SearchMoviesSuccessAction extends Action<typeof SEARCH_MOVIES_SUCCESS> {
	searchMovies: SearchMovies[]
}
export interface SearchMoviesFailureAction extends Action<typeof SEARCH_MOVIES_FAILURE> {
	error: AxiosError
}

export const addSearchMovies = (payload: ReqSearchMoviesPayload): SearchMoviesRequestAction => ({
	type: SEARCH_MOVIES_REQUEST,
	payload,
})

export const setSearchMovies = (searchMovies: SearchMovies[]): SearchMoviesSuccessAction => {
	return { type: SEARCH_MOVIES_SUCCESS, searchMovies }
}

export const errorSearchMovies = (error: AxiosError): SearchMoviesFailureAction => {
	return { type: SEARCH_MOVIES_FAILURE, error }
}
