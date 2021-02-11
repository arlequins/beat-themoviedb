import { PreloadedStateEpics, State } from 'common'

import {
	FavoriteAddFailureAction,
	FavoriteAddSuccessAction,
	FavoriteCreateFailureAction,
	FavoriteCreateSuccessAction,
	FavoriteListFailureAction,
	FavoriteListSuccessAction,
	FavoriteRemoveFailureAction,
	FavoriteRemoveSuccessAction,
	FAVORITE_ADD_FAILURE,
	FAVORITE_ADD_SUCCESS,
	FAVORITE_CREATE_FAILURE,
	FAVORITE_CREATE_SUCCESS,
	FAVORITE_LIST_FAILURE,
	FAVORITE_LIST_SUCCESS,
	FAVORITE_REMOVE_FAILURE,
	FAVORITE_REMOVE_SUCCESS,
} from 'client/actions'

export default {
	reducersMapObject: {
		[FAVORITE_ADD_SUCCESS]: (state: State, { responseAddFavorite }: FavoriteAddSuccessAction) => {
			return {
				...state,
				addFavorite: {
					statusCode: 200,
					result: responseAddFavorite,
					error: {},
				},
			}
		},
		[FAVORITE_ADD_FAILURE]: (state: State, { error }: FavoriteAddFailureAction) => {
			const errorStatusCode = error.response && error.response.status ? error.response.status : -1
			if (errorStatusCode === -1) {
				return {
					...state,
					addFavorite: {
						statusCode: 500,
						result: {},
						error: {},
					},
				}
			} else {
				return {
					...state,
					addFavorite: {
						statusCode: errorStatusCode,
						result: {},
						error: error?.response?.data,
					},
				}
			}
		},

		[FAVORITE_CREATE_SUCCESS]: (
			state: State,
			{ responseCreateFavorite }: FavoriteCreateSuccessAction
		) => {
			return {
				...state,
				createFavorite: {
					statusCode: 200,
					result: responseCreateFavorite,
					error: {},
				},
			}
		},
		[FAVORITE_CREATE_FAILURE]: (state: State, { error }: FavoriteCreateFailureAction) => {
			const errorStatusCode = error.response && error.response.status ? error.response.status : -1
			if (errorStatusCode === -1) {
				return {
					...state,
					createFavorite: {
						statusCode: 500,
						result: {},
						error: {},
					},
				}
			} else {
				return {
					...state,
					createFavorite: {
						statusCode: errorStatusCode,
						result: {},
						error: error?.response?.data,
					},
				}
			}
		},

		[FAVORITE_REMOVE_SUCCESS]: (
			state: State,
			{ responseRemoveFavorite }: FavoriteRemoveSuccessAction
		) => {
			return {
				...state,
				removeFavorite: {
					statusCode: 200,
					result: responseRemoveFavorite,
					error: {},
				},
			}
		},
		[FAVORITE_REMOVE_FAILURE]: (state: State, { error }: FavoriteRemoveFailureAction) => {
			const errorStatusCode = error.response && error.response.status ? error.response.status : -1
			if (errorStatusCode === -1) {
				return {
					...state,
					removeFavorite: {
						statusCode: 500,
						result: {},
						error: {},
					},
				}
			} else {
				return {
					...state,
					removeFavorite: {
						statusCode: errorStatusCode,
						result: {},
						error: error?.response?.data,
					},
				}
			}
		},

		[FAVORITE_LIST_SUCCESS]: (
			state: State,
			{ responseListFavorite }: FavoriteListSuccessAction
		) => {
			return {
				...state,
				listFavorite: {
					statusCode: 200,
					result: responseListFavorite,
					error: {},
				},
			}
		},
		[FAVORITE_LIST_FAILURE]: (state: State, { error }: FavoriteListFailureAction) => {
			const errorStatusCode = error.response && error.response.status ? error.response.status : -1
			if (errorStatusCode === -1) {
				return {
					...state,
					listFavorite: {
						statusCode: 500,
						result: {},
						error: {},
					},
				}
			} else {
				return {
					...state,
					listFavorite: {
						statusCode: errorStatusCode,
						result: {},
						error: error?.response?.data,
					},
				}
			}
		},
	},
	preloadedStateEpic: {
		addFavorite: [FAVORITE_ADD_SUCCESS, FAVORITE_ADD_FAILURE],
		createFavorite: [FAVORITE_CREATE_SUCCESS, FAVORITE_CREATE_FAILURE],
		removeFavorite: [FAVORITE_REMOVE_SUCCESS, FAVORITE_REMOVE_FAILURE],
		listFavorite: [FAVORITE_LIST_SUCCESS, FAVORITE_LIST_FAILURE],
	} as PreloadedStateEpics,
}
