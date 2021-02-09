import { PreloadedStateEpics, State } from 'common'

import {
	SearchMoviesFailureAction,
	SearchMoviesSuccessAction,
	SEARCH_MOVIES_FAILURE,
	SEARCH_MOVIES_SUCCESS,
} from 'client/actions'

export default {
	reducersMapObject: {
		[SEARCH_MOVIES_SUCCESS]: (state: State, { searchMovies }: SearchMoviesSuccessAction) => {
			return {
				...state,
				searchMovies: {
					statusCode: 200,
					result: searchMovies,
					error: {},
				},
			}
		},
		[SEARCH_MOVIES_FAILURE]: (state: State, { error }: SearchMoviesFailureAction) => {
			const errorStatusCode = error.response && error.response.status ? error.response.status : -1
			if (errorStatusCode === -1) {
				return {
					...state,
					searchMovies: {
						statusCode: 500,
						result: [],
						error: {},
					},
				}
			} else {
				return {
					...state,
					searchMovies: {
						statusCode: errorStatusCode,
						result: [],
						error: error?.response?.data,
					},
				}
			}
		},
	},
	preloadedStateEpic: {
		searchMovies: [SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_FAILURE],
	} as PreloadedStateEpics,
}
