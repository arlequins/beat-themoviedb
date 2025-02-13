import { AxiosError } from 'axios'
import { Action } from 'common'
import { ReqMovieDetailsPayload, ResMovieDetails } from 'response'

export const MOVIE_DETAILS_REQUEST = 'MOVIE_DETAILS_REQUEST'
export const MOVIE_DETAILS_SUCCESS = 'MOVIE_DETAILS_SUCCESS'
export const MOVIE_DETAILS_FAILURE = 'MOVIE_DETAILS_FAILURE'

export interface MovieDetailsRequestAction extends Action<typeof MOVIE_DETAILS_REQUEST> {
	payload: ReqMovieDetailsPayload
}
export interface MovieDetailsSuccessAction extends Action<typeof MOVIE_DETAILS_SUCCESS> {
	responseMovieDetails: ResMovieDetails
}
export interface MovieDetailsFailureAction extends Action<typeof MOVIE_DETAILS_FAILURE> {
	error: AxiosError
}

export const addMovieDetails = (payload: ReqMovieDetailsPayload): MovieDetailsRequestAction => ({
	type: MOVIE_DETAILS_REQUEST,
	payload,
})

export const setMovieDetails = (
	responseMovieDetails: ResMovieDetails
): MovieDetailsSuccessAction => {
	return { type: MOVIE_DETAILS_SUCCESS, responseMovieDetails }
}

export const errorMovieDetails = (error: AxiosError): MovieDetailsFailureAction => {
	return { type: MOVIE_DETAILS_FAILURE, error }
}
