import { env } from 'client/constants/Env'
import { ApiRequest } from 'client/services/methods'
import {
	ReqAddFavoritePayload,
	ReqCreateFavoritePayload,
	ReqListFavoritePayload,
	ReqMovieDetailsPayload,
	ReqRemoveFavoritePayload,
	ReqSearchMoviesPayload,
	ResAddFavorite,
	ResCreateFavorite,
	ResListFavorite,
	ResMovieDetails,
	ResRemoveFavorite,
	ResSearchMovies,
} from 'response'

export const requestSearchMovies = async (
	payload: ReqSearchMoviesPayload
): Promise<ResSearchMovies> => {
	const endpoint = `${env.API_ENDPOINT_URL}/search/movie`
	return await ApiRequest.get(endpoint, env.API_CLIENT_ID, {
		query: payload,
	})
}

export const requestMovieDetails = async (
	payload: ReqMovieDetailsPayload
): Promise<ResMovieDetails> => {
	const endpoint = `${env.API_ENDPOINT_URL}/movie/${payload.movie_id}`
	return await ApiRequest.get(endpoint, env.API_CLIENT_ID)
}

export const requestAddFavorite = async (
	payload: ReqAddFavoritePayload
): Promise<ResAddFavorite> => {
	const endpoint = `${env.API_ENDPOINT_URL}/list/${payload.path.list_id}/add_item`
	return await ApiRequest.post(endpoint, env.API_CLIENT_ID, {
		query: payload.query,
		body: payload.body,
	})
}
export const requestCreateFavorite = async (
	payload: ReqCreateFavoritePayload
): Promise<ResCreateFavorite> => {
	const endpoint = `${env.API_ENDPOINT_URL}/list`
	return await ApiRequest.post(endpoint, env.API_CLIENT_ID, {
		query: payload.query,
		body: payload.body,
	})
}
export const requestListFavorite = async (
	payload: ReqListFavoritePayload
): Promise<ResListFavorite> => {
	const endpoint = `${env.API_ENDPOINT_URL}/list/${payload.path.list_id}`
	return await ApiRequest.get(endpoint, env.API_CLIENT_ID, {
		query: payload.query,
	})
}
export const requestRemoveFavorite = async (
	payload: ReqRemoveFavoritePayload
): Promise<ResRemoveFavorite> => {
	const endpoint = `${env.API_ENDPOINT_URL}/list/${payload.path.list_id}`
	return await ApiRequest.post(endpoint, env.API_CLIENT_ID, {
		query: payload.query,
		body: payload.body,
	})
}
