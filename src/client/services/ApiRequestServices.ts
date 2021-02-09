import { env } from 'client/constants/Env'
import { ApiRequest } from 'client/services/methods'
import {
	ReqMovieDetailsPayload,
	ReqSearchMoviesPayload,
	ResMovieDetails,
	ResSearchMovies,
} from 'response'

export const requestSearchMovies = async (
	payload: ReqSearchMoviesPayload
): Promise<ResSearchMovies> => {
	const endpoint = `${env.API_ENDPOINT_URL}/search/movie`
	return await ApiRequest.get(endpoint, env.API_CLIENT_ID, payload)
}
export const requestMovieDetails = async (
	payload: ReqMovieDetailsPayload
): Promise<ResMovieDetails> => {
	const endpoint = `${env.API_ENDPOINT_URL}/movie/${payload.movie_id}`
	return await ApiRequest.get(endpoint, env.API_CLIENT_ID)
}
