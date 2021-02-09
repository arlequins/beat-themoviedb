import { env } from 'client/constants/Env'
import { ApiRequest } from 'client/services/methods'
import {
	MovieDetails,
	ReqMovieDetailsPayload,
	ReqSearchMoviesPayload,
	SearchMovies,
} from 'response'

export const requestSearchMovies = async (
	payload: ReqSearchMoviesPayload
): Promise<SearchMovies[]> => {
	const endpoint = `${env.API_ENDPOINT_URL}/search/movie`
	return await ApiRequest.get(endpoint, env.API_CLIENT_ID, payload)
}
export const requestMovieDetails = async (
	payload: ReqMovieDetailsPayload
): Promise<MovieDetails> => {
	const endpoint = `${env.API_ENDPOINT_URL}/v1/movie/${payload.movie_id}`
	return await ApiRequest.get(endpoint, env.API_CLIENT_ID)
}
