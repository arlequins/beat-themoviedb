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
	// const requestTokenRequestEndpoint = `${env.API_ENDPOINT_URL}/authentication/token/new`
	// const createRequestTokenRequest = await ApiRequest.get(requestTokenRequestEndpoint, env.API_CLIENT_ID, {
	// 	query: {},
	// })

	// if (!createRequestTokenRequest.success) {
	// 	throw new Error(createRequestTokenRequest)
	// }

	// const requestToken = createRequestTokenRequest

	const requestToken = payload.auth.requestToken
	const sessionRequestEndpoint = `${env.API_ENDPOINT_URL}/authentication/session/new`
	const createSessionRequest = await ApiRequest.post(sessionRequestEndpoint, env.API_CLIENT_ID, {
		body: {
			request_token: requestToken,
		},
	})

	if (!createSessionRequest.success) {
		throw new Error(createSessionRequest)
	}

	const sessionId = createSessionRequest.session_id

	const endpoint = `${env.API_ENDPOINT_URL}/list`
	const response = await ApiRequest.post(endpoint, env.API_CLIENT_ID, {
		query: {
			session_id: sessionId,
		},
		body: {
			name: payload.body.name,
			description: payload.body.description,
			language: payload.body.language,
		},
	})
	return response
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
	const endpoint = `${env.API_ENDPOINT_URL}/list/${payload.path.list_id}/remove_item`
	return await ApiRequest.post(endpoint, env.API_CLIENT_ID, {
		query: payload.query,
		body: payload.body,
	})
}
